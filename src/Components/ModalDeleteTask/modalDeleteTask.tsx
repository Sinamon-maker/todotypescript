import React, { useContext } from 'react';
import { TaskContext } from '../../Context/taskContext';
import { AppButton } from '../../Module/Button/button';
import { ModalContainer } from '../../Module/ModuleContainer/modalContainer';

export const ModalDelete = () => {
	const { confirmDeleteClick, canselDeleteTask } = useContext(TaskContext);

	const onConfirmDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		confirmDeleteClick();
	};
	const onCanselDeleteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
		canselDeleteTask();
	};

	return (
		<ModalContainer>
			<div className="w-80  p-4 pb-8 rounded bg-white">
				<h3>Are you sure?</h3>
				<p className="my-4">Do you whont to delete task?</p>
				<span className="block w-full flex justify-around">
					<AppButton style="" onClick={(e) => onConfirmDeleteClick(e)} title="Yes" nameValue="confirmDelete" />
					<AppButton style="" onClick={(e) => onCanselDeleteTask(e)} title="No" nameValue="canselDelete" />
				</span>
			</div>
			;
		</ModalContainer>
	);
};
