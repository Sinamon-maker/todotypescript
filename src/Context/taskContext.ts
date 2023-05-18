import React from 'react';
import { Task, SortParam, Data } from '../globalTypes';

type TaskContext = {
	taskResult: Data | null;
	error: string;

	onNewTask: (val: string) => void;
	changeStatus: (id: number) => void;
};

export type Cont = TaskContext | null;

export const TaskContext = React.createContext<TaskContext>({
	error: '',
	taskResult: null,

	onNewTask: () => null,
	changeStatus: () => null,
});
