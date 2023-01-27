import React from "react";
import { Task } from "../../globalTypes";
type Props = {
    listOfTasks: Array<Task>;
    onDeleteClick: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
    onChangeStatus: (e: React.MouseEvent<HTMLButtonElement>, val1: string, val2: number) => void;
};
export declare const Table: ({ onDeleteClick, listOfTasks, onChangeStatus, }: Props) => JSX.Element;
export {};
