import React from "react";

import { Container } from "../../Module/Container/container";
import { NewTaskForm } from "../NewTaskForm/newTaskForm";
import { Table } from "../Table/table";

import { Task } from "../../globalTypes";

type Props = {
  onNewTask: (e: React.FormEvent<EventTarget>) => void;
  handleChange: (e: React.ChangeEvent<EventTarget>) => void;
  taskName: string;
  listOfTasks: Array<Task>;
  disableSave: boolean;
  onPressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onDeleteClick: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
  onChangeStatus: (
    e: React.MouseEvent<HTMLButtonElement>,
    val1: string,
    val2: number
  ) => void;
};

export const ContentOfTasks = ({
  onNewTask,
  handleChange,
  taskName,
  listOfTasks,
  disableSave,
  onPressEnter,
  onDeleteClick,
  onChangeStatus,
}: Props) => {
  return (
    <Container>
      <NewTaskForm
        onNewTask={onNewTask}
        handleChange={handleChange}
        taskName={taskName}
        disableSave={disableSave}
        onPressEnter={onPressEnter}
      />
      <Table
        listOfTasks={listOfTasks}
        onDeleteClick={onDeleteClick}
        onChangeStatus={onChangeStatus}
      />
    </Container>
  );
};
