import React, { useContext, useState, useCallback, useMemo } from 'react';
import { TaskContext } from './TaskContext';

import { Task, Process } from '../globalTypes';
import { findTasks, saveInStorage } from '../Utils';
import { UserContext } from './UserContext';

import { ModalDelete } from '../Components/ModalDeleteTask/ModalDeleteTask';

type Props = {
	children: React.ReactNode;
	loadData: Task[] | null;
};

export const TaskProvider = ({ children, loadData }: Props) => {
	const logoName = useContext(UserContext);
	const [listOfTasks, setListOfTasks] = useState<Task[] | null>(loadData);
	const [idTaskToDelete, setIdTaskToDelete] = useState(0);

	const onNewTask = useCallback(
		(text: string) => {
			const newTask = {
				text,
				status: Process.inprogress,
				created: +new Date(),
			};
			if (listOfTasks !== null) {
				const newList: Array<Task> = [...listOfTasks, newTask];
				setListOfTasks(newList);
				saveInStorage(logoName, newList);
			} else {
				const newList: Array<Task> = [newTask];

				setListOfTasks(newList);
				saveInStorage(logoName, newList);
			}
		},
		[listOfTasks, logoName]
	);

	const changeTask = useCallback(
		(id: number, text: string) => {
			const list = findTasks(logoName);

			if (list !== null) {
				const newList = list.map((task) => {
					if (task.created === id) {
						return { ...task, text };
					}
					return task;
				});
				setListOfTasks(newList);
				saveInStorage(logoName, newList);
			}
		},
		[logoName]
	);

	const confirmDeleteClick = useCallback(() => {
		if (listOfTasks !== null) {
			const newTaskList: Task[] = listOfTasks.filter((task: Task) => task.created !== idTaskToDelete);
			saveInStorage(logoName, newTaskList);
			setListOfTasks(newTaskList);
			setIdTaskToDelete(0);
		}
	}, [idTaskToDelete, listOfTasks, logoName]);

	const changeStatus = useCallback(
		(id: number, stat: string) => {
			if (listOfTasks !== null) {
				const newTaskList = listOfTasks.map((task) => {
					if (task.created !== id || stat !== Process.inprogress) return task;

					return {
						text: task.text,
						created: task.created,
						status: Process.done,
					};
				});

				setListOfTasks(newTaskList);
				saveInStorage(logoName, newTaskList);
			}
		},
		[listOfTasks, logoName]
	);

	const canselDeleteTask = useCallback(() => {
		setIdTaskToDelete(0);
	}, []);

	const onSettingDeleteId = useCallback((val: number) => {
		setIdTaskToDelete(val);
	}, []);

	const contextValue = useMemo(
		() => ({
			listOfTasks,
			onNewTask,
			changeStatus,
			confirmDeleteClick,
			onSettingDeleteId,
			canselDeleteTask,
			changeTask,
		}),
		[listOfTasks, onNewTask, changeStatus, confirmDeleteClick, onSettingDeleteId, canselDeleteTask, changeTask]
	);

	return (
		<TaskContext.Provider value={contextValue}>
			{children}
			{idTaskToDelete !== 0 && <ModalDelete />}
		</TaskContext.Provider>
	);
};
