import React from 'react';
import { Task, SortParam, Data } from '../globalTypes';

type TaskContext = {
	taskResult: Data | null;
	errorLoadData: string;
	sortedList: Task[] | [];
	listOfTasks: Task[] | [];
	idEditTask: number;
	onNewTask: (val: string) => void;
	changeStatus: (id: number) => void;
	onSettingDeleteId: (val: number) => void;
	onSettingEditedId: (val: number) => void;
	sorting: SortParam;
	setSorting: React.Dispatch<React.SetStateAction<SortParam>>;
	setIsCatalogueDel: React.Dispatch<React.SetStateAction<boolean>>;
};

export type Cont = TaskContext | null;

export const TaskContext = React.createContext<TaskContext>({
	sortedList: [],
	errorLoadData: '',
	taskResult: null,
	listOfTasks: [],
	idEditTask: 0,
	onNewTask: () => null,
	changeStatus: () => null,
	onSettingDeleteId: () => null,
	onSettingEditedId: () => null,
	sorting: SortParam.all,
	setSorting: () => null,
	setIsCatalogueDel: () => null,
});
