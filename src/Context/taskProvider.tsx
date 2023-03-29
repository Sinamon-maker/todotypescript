import React, { useContext, useState, useCallback, useMemo, useEffect } from 'react';
import { TaskContext } from './taskContext';

import { Task, SortParam } from '../globalTypes';
import { UserContext } from './UserContext';

import { ModalDeleteTask } from '../Components/ModalDeleteTask/modalDeleteTask';
import { ModalEditTask } from '../Components/ModalEditTask/ModalEditTask';

type Props = {
	children: React.ReactNode;
	loadData: Task[] | [];
};

export const TaskProvider = ({ children, loadData }: Props) => {
	const logoName = useContext(UserContext);
	const [listOfTasks, setListOfTasks] = useState<Task[] | []>(loadData || []);
	const [idTaskToDelete, setIdTaskToDelete] = useState(0);
	const [sorting, setSorting] = useState<SortParam>(SortParam.all);
	const [sortedList, setSortedList] = useState<Task[] | []>(listOfTasks);
	const [idEditTask, setIdEditTask] = useState(0);

	const sortList = (list: Array<Task>, sort: SortParam) => {
		if (sort === SortParam.done) {
			return list?.filter((task) => task.status);
		}
		if (sort === SortParam.ongoing) {
			return list?.filter((task) => !task.status);
		}
		return list;
	};

	useEffect(() => {
		if (listOfTasks.length) {
			const newList = sortList(listOfTasks, sorting);
			setSortedList(newList);
		}
	}, [sorting, listOfTasks, logoName]);

	const onNewTask = useCallback(
		(text: string) => {
			const newTask = {
				text,
				status: false,
				created: +new Date(),
			};

			let newList: Array<Task> = [];
			if (listOfTasks.length) {
				newList = [...listOfTasks, newTask];
			} else {
				newList = [newTask];
			}
			setListOfTasks(newList);
			setSorting(SortParam.all);
			//	saveInStorage(logoName, newList);
		},
		[listOfTasks, logoName]
	);

	const canselEditTask = useCallback(() => {
		setIdEditTask(0);
	}, []);

	const changeTask = useCallback(
		(text: string, id: number) => {
			if (listOfTasks !== null) {
				const newList = listOfTasks.map((task) => {
					if (task.created === id) {
						return { ...task, text };
					}

					return task;
				});

				//		saveInStorage(logoName, newList);
				setListOfTasks(newList);

				canselEditTask();
			}
		},
		[logoName, canselEditTask, listOfTasks]
	);

	const confirmDeleteClick = useCallback(() => {
		if (listOfTasks.length) {
			const newTaskList: Task[] = listOfTasks.filter((task: Task) => task.created !== idTaskToDelete);
			//	saveInStorage(logoName, newTaskList);
			setListOfTasks(newTaskList);
			setIdTaskToDelete(0);
			const newSortedList = sortList(newTaskList, sorting);
			setSortedList(newSortedList);
		}
	}, [idTaskToDelete, listOfTasks, logoName, sorting]);

	const changeStatus = useCallback(
		(id: number) => {
			if (listOfTasks.length) {
				const newTaskList = listOfTasks.map((task) => {
					if (task.created === id) return { ...task, status: !task.status };

					return task;
				});

				setListOfTasks(newTaskList);
				//		saveInStorage(logoName, newTaskList);
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

	const onSettingEditedId = useCallback((val: number) => {
		setIdEditTask(val);
	}, []);

	const contextValue = useMemo(
		() => ({
			sortedList,
			idEditTask,
			onNewTask,
			changeStatus,
			confirmDeleteClick,
			onSettingDeleteId,
			onSettingEditedId,
			canselDeleteTask,
			canselEditTask,
			changeTask,
			sorting,
			setSorting,
		}),
		[
			sortedList,
			idEditTask,
			onNewTask,
			changeStatus,
			confirmDeleteClick,
			onSettingDeleteId,
			onSettingEditedId,
			canselDeleteTask,
			canselEditTask,
			changeTask,
			sorting,
			setSorting,
		]
	);

	return (
		<TaskContext.Provider value={contextValue}>
			{children}
			{idEditTask && <ModalEditTask />}
			{idTaskToDelete !== 0 && <ModalDeleteTask />}
		</TaskContext.Provider>
	);
};
