import React, { useContext, useCallback, useEffect } from 'react';

import { Task, Data } from '../../../globalTypes';
import { UserContext } from '../../../Context/userContext';

import { ModalDelete } from '../../ModalDelete/ModalDelete';
import { ModalEditTask } from '../../ModalEditTask/ModalEditTask';

import { updateTask } from '../../../api/updateDocument';

import useChangeTaskQueryStore from '../../../store/tasksStore';

type Props = {
	children: React.ReactNode;
	newDoc: Data;
	error: string;
};

export const TaskContainer = ({ children, newDoc, error }: Props) => {
	const logoName = useContext(UserContext);

	const taskResult = newDoc;

	const idTaskDel = useChangeTaskQueryStore((s) => s.idTaskDel);
	const setTaskDel = useChangeTaskQueryStore((s) => s.setTaskDel);
	const idTaskComplete = useChangeTaskQueryStore((s) => s.idTaskComplete);
	const setTaskComplete = useChangeTaskQueryStore((s) => s.setTaskComplete);
	const setTaskEdit = useChangeTaskQueryStore((s) => s.setTaskEdit);
	const taskEdit = useChangeTaskQueryStore((s) => s.taskEdit);
	const newTask = useChangeTaskQueryStore((s) => s.newTask);
	const setNewTask = useChangeTaskQueryStore((s) => s.setNewTask);

	const onNewTask = async (task: Task) => {
		let newList: Array<Task> = [];
		if (taskResult?.tasks.length) {
			newList = [...taskResult?.tasks, task];
		} else {
			newList = [task];
		}
		if (taskResult) {
			try {
				console.log(newList, taskResult?.id);
				await updateTask('tasks', { tasks: newList }, taskResult?.id);
			} catch (err) {
				console.log(err);
			}
		}
		setNewTask(null);
	};

	useEffect(() => {
		if (newTask) onNewTask(newTask);
	}, [newTask]);

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
		}
	};

	const canselDeleteTask = useCallback(() => {
		setTaskDel(0);
	}, []);

	return (
		<div>
			{children}

			{taskEdit && <ModalEditTask canselEditTask={canselEditTask} changeTask={changeTask} taskEdit={taskEdit} />}
			{idTaskDel !== 0 && <ModalDelete title="Are you sure you want to delete tsak?" confirmDeleteClick={confirmDeleteClick} canselDelete={canselDeleteTask} />}
		</div>
	);
};
