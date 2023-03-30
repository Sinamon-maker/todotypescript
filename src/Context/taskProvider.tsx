import React, { useContext, useState, useCallback, useMemo, useEffect } from 'react';
import { TaskContext } from './taskContext';

import { Data, Task, SortParam, serverDataTask } from '../globalTypes';
import { UserContext } from './UserContext';

import { ModalDeleteTask } from '../Components/ModalDeleteTask/modalDeleteTask';
import { ModalEditTask } from '../Components/ModalEditTask/ModalEditTask';

import { updateTask } from '../Hooks/updateDocument';

type Props = {
	children: React.ReactNode;
	loadData: serverDataTask;
};

export const TaskProvider = ({ children, loadData }: Props) => {
	const logoName = useContext(UserContext);
	const taskResult: Data | null = loadData.newDoc;
	const [listOfTasks, setListOfTasks] = useState<Task[] | []>([]);

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
		if (taskResult) {
			setListOfTasks(taskResult.tasks);
		}
	}, []);

	useEffect(() => {
		if (listOfTasks.length) {
			const newList = sortList(listOfTasks, sorting);
			setSortedList(newList);
		} else {
			setSortedList([]);
		}
	}, [sorting, listOfTasks, logoName]);

	const onNewTask = useCallback(
		async (text: string) => {
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
			if (taskResult) {
				try {
					console.log(newList, taskResult?.id);
					await updateTask('tasks', { tasks: newList }, taskResult?.id);

					setListOfTasks(newList);
				} catch (err) {
					console.log(err);
				}
			}
			//	saveInStorage(logoName, newList);
		},
		[listOfTasks, logoName]
	);

	const canselEditTask = useCallback(() => {
		setIdEditTask(0);
	}, []);

	const changeTask = useCallback(
		async (text: string, id: number) => {
			if (listOfTasks !== null) {
				const newList = listOfTasks.map((task) => {
					if (task.created === id) {
						return { ...task, text };
					}

					return task;
				});
				if (taskResult) {
					try {
						await updateTask('tasks', { tasks: newList }, taskResult?.id);
						setListOfTasks(newList);
						canselEditTask();
					} catch (err) {
						console.log(err);
					}
				}
				//		saveInStorage(logoName, newList);
			}
		},
		[logoName, canselEditTask, listOfTasks]
	);

	const confirmDeleteClick = useCallback(async () => {
		if (listOfTasks.length) {
			const newTaskList: Task[] | [] = listOfTasks.filter((task: Task) => task.created !== idTaskToDelete);
			if (taskResult) {
				try {
					console.log('delete', newTaskList);
					await updateTask('tasks', { tasks: newTaskList }, taskResult?.id);
					setListOfTasks(newTaskList);
					setIdTaskToDelete(0);
				} catch (err) {
					console.log(err);
				}
			}
			//	saveInStorage(logoName, newTaskList);
		}
	}, [idTaskToDelete, listOfTasks, logoName, sorting]);

	const changeStatus = useCallback(
		async (id: number) => {
			if (listOfTasks.length) {
				const newTaskList = listOfTasks.map((task) => {
					if (task.created === id) return { ...task, status: !task.status };

					return task;
				});
				if (taskResult) {
					try {
						await updateTask('tasks', { tasks: newTaskList }, taskResult?.id);
						setListOfTasks(newTaskList);
					} catch (err) {
						console.log(err);
					}
				}

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
			listOfTasks,
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
			listOfTasks,
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
			{idEditTask !== 0 && <ModalEditTask />}
			{idTaskToDelete !== 0 && <ModalDeleteTask />}
		</TaskContext.Provider>
	);
};
