import React from "react";
import { Task } from "../globalTypes";
type TaskContext = {
    listOfTasks: Task[] | null;
    onChangeTask: (t: string, b: number) => void;
    onChangeStatus: (e: React.MouseEvent<HTMLButtonElement>, stat: string, id: number) => void;
    onDeleteClick: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
};
export type Cont = TaskContext | null;
export declare const TaskContext: React.Context<TaskContext>;
export {};