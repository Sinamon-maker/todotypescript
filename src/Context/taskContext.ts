import React from 'react';
import { Task, SortParam } from '../globalTypes';

type TaskContext = {
	listOfTasks: Task[] | null;

	onNewTask: (val: string) => void;
	changeTask: (id: number, text: string) => void;
	changeStatus: (id: number, stat: string) => void;
	onSettingDeleteId: (val: number) => void;
	canselDeleteTask: () => void;
	confirmDeleteClick: () => void;
	sorting: SortParam;
	setSorting: React.Dispatch<React.SetStateAction<SortParam>>;
};

export type Cont = TaskContext | null;

export const TaskContext = React.createContext<TaskContext>({
	listOfTasks: null,
	onNewTask: () => null,
	changeTask: () => null,
	changeStatus: () => null,
	onSettingDeleteId: () => null,
	canselDeleteTask: () => null,
	confirmDeleteClick: () => null,
	sorting: SortParam.all,
	setSorting: () => null,
});
