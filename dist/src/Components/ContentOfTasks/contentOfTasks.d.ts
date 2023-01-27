import React from "react";
import { Task } from "../../globalTypes";
type Props = {
    onNewTask: (e: React.FormEvent<EventTarget>) => void;
    handleChange: (e: React.ChangeEvent<EventTarget>) => void;
    taskName: string;
    listOfTasks: Array<Task>;
    disableSave: boolean;
    onPressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onDeleteClick: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
    onChangeStatus: (e: React.MouseEvent<HTMLButtonElement>, val1: string, val2: number) => void;
};
export declare const ContentOfTasks: ({ onNewTask, handleChange, taskName, listOfTasks, disableSave, onPressEnter, onDeleteClick, onChangeStatus, }: Props) => JSX.Element;
export {};
