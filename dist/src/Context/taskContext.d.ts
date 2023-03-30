import React from 'react';
import { Task, SortParam } from '../globalTypes';
type TaskContext = {
    sortedList: Task[] | [];
    idEditTask: number;
    onNewTask: (val: string) => void;
    changeTask: (text: string, val: number) => void;
    changeStatus: (id: number) => void;
    onSettingDeleteId: (val: number) => void;
    onSettingEditedId: (val: number) => void;
    canselDeleteTask: () => void;
    canselEditTask: () => void;
    confirmDeleteClick: () => void;
    sorting: SortParam;
    setSorting: React.Dispatch<React.SetStateAction<SortParam>>;
};
export type Cont = TaskContext | null;
export declare const TaskContext: React.Context<TaskContext>;
export {};
