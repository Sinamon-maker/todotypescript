import React, { useContext, useState } from "react";
import { TaskContext } from "./taskContext";

import { Task, Process } from "../globalTypes";
import { findTasks, saveInStorage } from "../utils";
import { UserContext } from "./userContext";

import { ModalDelete } from "../Components/ModalDeleteTask/modalDeleteTask";

type Props = {
  children: React.ReactNode;
  loadData: Task[] | null;
  logoName: string;
};

export const TaskProvider = ({ children, loadData }: Props) => {
  const logoName = useContext(UserContext);
  const [listOfTasks, setListOfTasks] = useState<Task[] | null>(loadData);
  const [idTaskToDelete, setIdTaskToDelete] = useState(0);

  const onNewTask = (text: string) => {
    const newTask = {
      text,
      status: Process.inprogress,
      created: +new Date(),
    };
    if (listOfTasks !== null) {
      const newList: Array<Task> = [...listOfTasks, newTask];
      setListOfTasks(newList);
      saveInStorage(logoName, newList);
    } else {
      const newList: Array<Task> = [newTask];

      setListOfTasks(newList);
      saveInStorage(logoName, newList);
    }
  };

  const changeTask = (id: number, text: string) => {
    const list = findTasks(logoName);

    if (list !== null) {
      const newList = list.map((task) => {
        if (task.created === id) {
          return { ...task, text };
        } else {
          return task;
        }
      });
      setListOfTasks(newList);
      saveInStorage(logoName, newList);
    }
  };

  const confirmDeleteClick = () => {
    if (listOfTasks !== null) {
      const newTaskList: Task[] = listOfTasks.filter(
        (task: Task) => task.created !== idTaskToDelete
      );
      saveInStorage(logoName, newTaskList);
      setListOfTasks(newTaskList);
      setIdTaskToDelete(0);
    }
  };

  const changeStatus = (id: number, stat: string) => {
    if (listOfTasks !== null) {
      const newTaskList = listOfTasks.map((task) => {
        if (task.created !== id) return task;
        else {
          task.status === Process.inprogress;
          return {
            text: task.text,
            created: task.created,
            status: Process.done,
          };
        }
      });

      setListOfTasks(newTaskList);
      saveInStorage(logoName, newTaskList);
    }
  };

  const canselDeleteTask = () => {
    setIdTaskToDelete(0);
  };

  const onSettingDeleteId = (val: number) => {
    setIdTaskToDelete(val);
  };

  return (
    <TaskContext.Provider
      value={{
        listOfTasks,
        onNewTask,
        changeStatus,
        confirmDeleteClick,
        onSettingDeleteId,
        canselDeleteTask,
        changeTask,
      }}
    >
      {children}
      {idTaskToDelete !== 0 && <ModalDelete />}
    </TaskContext.Provider>
  );
};
