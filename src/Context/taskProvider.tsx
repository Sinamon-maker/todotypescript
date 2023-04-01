import React, { useContext, useState, useCallback, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from './taskContext';

import { Data, Task, SortParam, serverDataTask } from '../globalTypes';
import { UserContext } from './UserContext';

import { ModalDeleteTask } from '../Components/ModalDeleteTask/modalDeleteTask';
import { ModalEditTask } from '../Components/ModalEditTask/ModalEditTask';

import { updateTask } from '../api/updateDocument';
import { deleteTask } from '../api/deleteDocument';

import { ModalDeleteCatalogue } from '../Components/ModalDeleteCatalogue/ModalDeleteCatalogue';

type Props = {
	children: React.ReactNode;
	loadData: serverDataTask;
};

export const TaskProvider = ({ children, loadData }: Props) => {
	const logoName = useContext(UserContext);
	const [errorLoadData, setErrorLoadDoc] = useState('');
	const [taskResult, setTaskResult] = useState<Data | null>(null);
	const [listOfTasks, setListOfTasks] = useState<Task[] | []>([]);

	const [idTaskToDelete, setIdTaskToDelete] = useState(0);
	const [sorting, setSorting] = useState<SortParam>(SortParam.all);
	const [sortedList, setSortedList] = useState<Task[] | []>(listOfTasks);
	const [idEditTask, setIdEditTask] = useState(0);
	const [isCatalogueDel, setIsCatalogueDel] = useState(false);

	const navigate = useNavigate();

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
		if (loadData.newDoc) {
			setTaskResult(loadData.newDoc);
			setListOfTasks(loadData.newDoc.tasks);
		}
		if (loadData.error) {
			setErrorLoadDoc(loadData.error);
		}
	}, [loadData.error, loadData.newDoc]);

	useEffect(() => {
		if (listOfTasks && listOfTasks.length) {
			const newList = sortList(listOfTasks, sorting);
			setSortedList(newList);
		} else {
			setSortedList([]);
		}
	}, [sorting, listOfTasks, logoName]);

	const deleteCatalogue = async () => {
		try {
			if (taskResult) {
				await deleteTask('tasks', taskResult.id);
				navigate('/tasks');
			}
		} catch (err) {
			console.log(err);
		}
	};

	const canselDeleteCatalogue = () => {
		setIsCatalogueDel(false);
	};

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
		[listOfTasks, taskResult]
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
		[canselEditTask, listOfTasks, taskResult]
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
	}, [idTaskToDelete, listOfTasks, taskResult]);

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
		[listOfTasks, taskResult]
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
			taskResult,
			errorLoadData,
			sortedList,
			listOfTasks,
			idEditTask,
			onNewTask,
			changeStatus,
			onSettingDeleteId,
			onSettingEditedId,
			sorting,
			setSorting,
			setIsCatalogueDel,
		}),
		[
			sortedList,
			errorLoadData,
			taskResult,
			listOfTasks,
			idEditTask,
			onNewTask,
			changeStatus,
			onSettingDeleteId,
			onSettingEditedId,
			sorting,
			setSorting,
			setIsCatalogueDel,
		]
	);

	return (
		<TaskContext.Provider value={contextValue}>
			{children}
			{isCatalogueDel && <ModalDeleteCatalogue deleteCatalogue={deleteCatalogue} canselDeleteCatalogue={canselDeleteCatalogue} />}
			{idEditTask !== 0 && <ModalEditTask canselEditTask={canselEditTask} changeTask={changeTask} />}
			{idTaskToDelete !== 0 && <ModalDeleteTask confirmDeleteClick={confirmDeleteClick} canselDeleteTask={canselDeleteTask} />}
		</TaskContext.Provider>
	);
};
