import React from "react";
import { Task } from "../globalTypes";

type TaskContext = {
  listOfTasks: Task[] | null;

  onNewTask: (val: string) => void;
  changeTask: (id: number, text: string) => void;
  changeStatus: (id: number, stat: string) => void;
  onSettingDeleteId: (val: number) => void;
  canselDeleteTask: () => void;
  confirmDeleteClick: () => void;
};

export type Cont = TaskContext | null;

export const TaskContext = React.createContext<TaskContext>({
  listOfTasks: null,
  onNewTask: () => {},
  changeTask: () => {},
  changeStatus: () => {},
  onSettingDeleteId: () => {},
  confirmDeleteClick: () => {},
  canselDeleteTask: () => {},
});
