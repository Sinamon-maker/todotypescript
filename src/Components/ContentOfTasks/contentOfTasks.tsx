import React from "react";

import { Container } from "../../Module/Container/container";
import { NewTaskForm } from "../NewTaskForm/newTaskForm";
import { Table } from "../Table/table";

import { Task } from "../../globalTypes";

type Props = {
  onNewTask: (e: React.FormEvent<EventTarget>) => void;
  handleChange: (e: React.ChangeEvent<EventTarget>) => void;
  taskName: string;
  disableSave: boolean;
  onPressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const ContentOfTasks = ({
  onNewTask,
  handleChange,
  taskName,
  disableSave,
  onPressEnter,
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
      <Table />
    </Container>
  );
};
