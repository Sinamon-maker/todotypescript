import React from 'react';
import { Task, SortParam, Data } from '../globalTypes';

type TaskContext = {
	taskResult: Data | null;
	sortedList: Task[] | [];
	listOfTasks: Task[] | [];
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

export const TaskContext = React.createContext<TaskContext>({
	sortedList: [],
	taskResult: null,
	listOfTasks: [],
	idEditTask: 0,
	onNewTask: () => null,
	changeTask: () => null,
	changeStatus: () => null,
	onSettingDeleteId: () => null,
	onSettingEditedId: () => null,
	canselDeleteTask: () => null,
	canselEditTask: () => null,
	confirmDeleteClick: () => null,
	sorting: SortParam.all,
	setSorting: () => null,
});
