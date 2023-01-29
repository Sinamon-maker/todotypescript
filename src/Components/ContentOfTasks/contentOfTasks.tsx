import React, { useState, useEffect } from "react";

import { Container } from "../../Module/Container/container";
import { NewTaskForm } from "../NewTaskForm/newTaskForm";
import { Table } from "../Table/table";
import { TaskContext, Cont } from "../../Context/taskContext";
import { findTasks, saveInStorage } from "../../utils";

import { Task, Process, List } from "../../globalTypes";

type Props = {
  logoName: string;
};

export const ContentOfTasks = ({ logoName }: Props) => {
  const [taskName, setTaskName] = useState("");
  const [listOfTasks, setListOfTasks] = useState<List>([]);
  const [disableSave, setDisableSave] = useState(true);

  useEffect(() => {
    const list = findTasks(logoName);

    if (list !== undefined) {
      setListOfTasks(list);
    }
  }, []);

  const onNewTask = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (taskName.length > 2) {
      const newTask = {
        text: taskName,
        status: Process.inprogress,
        created: +new Date(),
      };

      const newList: Array<Task> = [...listOfTasks, newTask];
      setListOfTasks(newList);
      saveInStorage(logoName, newList);
      setTaskName("");
      setDisableSave(false);
    }
  };

  const onChangeTask = (text: string, id: number) => {
    console.log(text, id);
    const list = findTasks(logoName);

    if (list !== null) {
      const newList = list.map((task) => {
        if (task.created === id) {
          return { status: task.status, created: id, text: text };
        } else {
          return task;
        }
      });
      setListOfTasks(newList);
      saveInStorage(logoName, newList);
    }
  };

  const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      onNewTask(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      if (e.target.name === "task") {
        setTaskName(e.target.value);
        if (e.target.value.length > 2) {
          setDisableSave(false);
        }
        if (e.target.value.length < 3) {
          setDisableSave(true);
        }
      }
    }
  };

  const onDeleteClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    created: number
  ) => {
    const newTaskList: Task[] = listOfTasks.filter(
      (task: Task) => task.created !== created
    );
    saveInStorage(logoName, newTaskList);
    setListOfTasks(newTaskList);
  };

  const onChangeStatus = (
    e: React.MouseEvent<HTMLButtonElement>,
    stat: string,
    id: number
  ) => {
    const newTaskList = listOfTasks.map((task) => {
      if (task.created !== id) return task;
      else {
        task.status === Process.inprogress;
        return { text: task.text, created: task.created, status: Process.done };
      }
    });

    setListOfTasks(newTaskList);
    saveInStorage(logoName, newTaskList);
  };

  return (
    <TaskContext.Provider
      value={{ listOfTasks, onChangeStatus, onChangeTask, onDeleteClick }}
    >
      <Container>
        <NewTaskForm
          onNewTask={onNewTask}
          handleChange={handleChange}
          taskName={taskName}
          disableSave={disableSave}
          onPressEnter={onPressEnter}
        />
        <Table />
      </Container>
    </TaskContext.Provider>
  );
};
