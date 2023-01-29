import React from "react";
import { Task } from "../../../globalTypes";
type Props = {
    task: Task;
    id: number;
    onChangeStatus: (e: React.MouseEvent<HTMLButtonElement>, val1: string, val: number) => void;
    onSaveEditTask: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onDeleteClick: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
    canselEditTask: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export declare const ActionsTableElement: ({ task, id, onChangeStatus, onSaveEditTask, onDeleteClick, canselEditTask, }: Props) => JSX.Element;
export {};
