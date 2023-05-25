import React, { useContext, useCallback } from 'react';

import { Task, Data } from '../../../globalTypes';
import { UserContext } from '../../../Context/userContext';

import { ModalDelete } from '../../ModalDelete/ModalDelete';
import { ModalEditTask } from '../../ModalEditTask/ModalEditTask';

import useChangeTaskQueryStore from '../../../store/tasksStore';
import { changeTask, deleteTask } from '../../../Utils';

type Props = {
	children: React.ReactNode;
	newDoc: Data;
};

export const TaskContainer = ({ children, newDoc }: Props) => {
	const logoName = useContext(UserContext);

	const taskResult = newDoc;

	const idTaskDel = useChangeTaskQueryStore((s) => s.idTaskDel);
	const setTaskDel = useChangeTaskQueryStore((s) => s.setTaskDel);
	const setTaskEdit = useChangeTaskQueryStore((s) => s.setTaskEdit);
	const taskEdit = useChangeTaskQueryStore((s) => s.taskEdit);

	const canselEditTask = () => {
		setTaskEdit(null);
	};

	const onConfirmChangeTask = async (newTask: Task) => {
		try {
			await changeTask(taskResult, newTask);

			canselEditTask();
		} catch (err) {
			console.log(err);
		}
	};

	const confirmDeleteClick = async () => {
		if (taskResult && taskResult.tasks.length) {
			try {
				await deleteTask(taskResult, idTaskDel);
				setTaskDel(0);
			} catch (error) {
				console.log(error);
			}
		}
	};

	const canselDeleteTask = () => {
		setTaskDel(0);
	};

	return (
		<>
			{children}

			{taskEdit && <ModalEditTask canselEditTask={canselEditTask} onConfirmChangeTask={onConfirmChangeTask} taskEdit={taskEdit} />}
			{idTaskDel !== 0 && <ModalDelete title="Are you sure you want to delete tsak?" confirmDeleteClick={confirmDeleteClick} canselDelete={canselDeleteTask} />}
		</>
	);
};
