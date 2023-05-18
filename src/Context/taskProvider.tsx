import React, { useContext, useState, useCallback, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from './taskContext';

import { Task, serverDataTask } from '../globalTypes';
import { UserContext } from './userContext';

import { ModalDeleteTask } from '../Components/ModalDeleteTask/modalDeleteTask';
import { ModalEditTask } from '../Components/ModalEditTask/ModalEditTask';

import { updateTask } from '../api/updateDocument';
import { deleteTask } from '../api/deleteDocument';

import { ModalDeleteCatalogue } from '../Components/ModalDeleteCatalogue/ModalDeleteCatalogue';
import useChangeTaskQueryStore from '../store/tasksStore';

type Props = {
	children: React.ReactNode;
	loadData: serverDataTask;
};

export const TaskProvider = ({ children, loadData }: Props) => {
	const logoName = useContext(UserContext);

	const taskResult = loadData.newDoc;
	const error = loadData.error;
	const idTaskDel = useChangeTaskQueryStore((s) => s.idTaskDel);
	const setTaskDel = useChangeTaskQueryStore((s) => s.setTaskDel);
	const idTaskComplete = useChangeTaskQueryStore((s) => s.idTaskComplete);
	const setTaskComplete = useChangeTaskQueryStore((s) => s.setTaskComplete);
	const setTaskEdit = useChangeTaskQueryStore((s) => s.setTaskEdit);
	const taskEdit = useChangeTaskQueryStore((s) => s.taskEdit);

	const [isCatalogueDel, setIsCatalogueDel] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (idTaskComplete) changeStatus(idTaskComplete);
		setTaskComplete(0);
		//receive new
	}, [idTaskComplete]);

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
			if (taskResult?.tasks.length) {
				newList = [...taskResult?.tasks, newTask];
			} else {
				newList = [newTask];
			}
			if (taskResult) {
				try {
					console.log(newList, taskResult?.id);
					await updateTask('tasks', { tasks: newList }, taskResult?.id);
				} catch (err) {
					console.log(err);
				}
			}
			//	saveInStorage(logoName, newList);
		},
		[taskResult]
	);

	const canselEditTask = () => {
		setTaskEdit(null);
	};

	const changeTask = async (newTask: Task) => {
		if (taskResult && taskResult?.tasks !== null) {
			const newList = taskResult?.tasks.map((task) => {
				if (task.created === newTask.created) {
					return { ...newTask };
				}

				return task;
			});

			try {
				await updateTask('tasks', { tasks: newList }, taskResult?.id);

				canselEditTask();
			} catch (err) {
				console.log(err);
			}
		}
		//		saveInStorage(logoName, newList);
	};

	const confirmDeleteClick = async () => {
		if (taskResult && taskResult.tasks.length) {
			const newTaskList: Task[] | [] = taskResult.tasks.filter((task: Task) => task.created !== idTaskDel);
			if (taskResult) {
				try {
					console.log('delete', newTaskList);
					await updateTask('tasks', { tasks: newTaskList }, taskResult?.id);

					setTaskDel(0);
				} catch (err) {
					console.log(err);
				}
			}
			//	saveInStorage(logoName, newTaskList);
		}
	};

	const changeStatus = async (id: number) => {
		if (taskResult && taskResult.tasks.length) {
			const newTaskList = taskResult.tasks.map((task) => {
				if (task.created === id) return { ...task, status: !task.status };

				return task;
			});
			if (taskResult) {
				try {
					await updateTask('tasks', { tasks: newTaskList }, taskResult?.id);
				} catch (err) {
					console.log(err);
				}
			}

			//		saveInStorage(logoName, newTaskList);
		}
	};

	const canselDeleteTask = useCallback(() => {
		setTaskDel(0);
	}, []);

	const contextValue = useMemo(
		() => ({
			taskResult,
			error,
			onNewTask,
			changeStatus,
		}),
		[error, taskResult, onNewTask, changeStatus]
	);

	return (
		<TaskContext.Provider value={contextValue}>
			{children}
			{isCatalogueDel && <ModalDeleteCatalogue deleteCatalogue={deleteCatalogue} canselDeleteCatalogue={canselDeleteCatalogue} />}
			{taskEdit && <ModalEditTask canselEditTask={canselEditTask} changeTask={changeTask} taskEdit={taskEdit} />}
			{idTaskDel !== 0 && <ModalDeleteTask confirmDeleteClick={confirmDeleteClick} canselDeleteTask={canselDeleteTask} />}
		</TaskContext.Provider>
	);
};
