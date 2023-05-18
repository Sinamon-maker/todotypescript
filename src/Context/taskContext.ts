import React from 'react';
import { Task, SortParam, Data } from '../globalTypes';

type TaskContext = {
	taskResult: Data | null;
	errorLoadData: string;

	onNewTask: (val: string) => void;
	changeStatus: (id: number) => void;
};

export type Cont = TaskContext | null;

export const TaskContext = React.createContext<TaskContext>({
	errorLoadData: '',
	taskResult: null,

	onNewTask: () => null,
	changeStatus: () => null,
});
