import React, { useContext } from 'react';
import { TaskContext } from '../../Context/taskContext';
import { AppButton } from '../../Module/Button/Button';
import { ModalContainer } from '../../Module/ModuleContainer/ModalContainer';

export const ModalDeleteTask = () => {
	const { confirmDeleteClick, canselDeleteTask } = useContext(TaskContext);

	const onConfirmDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		confirmDeleteClick();
	};
	const onCanselDeleteTask = (e: React.MouseEvent<HTMLButtonElement>) => {
		canselDeleteTask();
	};

	return (
		<ModalContainer>
			<div className="w-80  p-4 py-6 pl-6 rounded bg-fill-main text-skin-base">
				<h3>Are you sure?</h3>
				<p className="my-4">Do you whant to delete task?</p>
				<span className="block w-full flex justify-around">
					<AppButton
						style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg"
						onClick={(e) => onConfirmDeleteClick(e)}
						title="Yes"
						nameValue="confirmDelete"
					/>
					<AppButton
						style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg"
						onClick={(e) => onCanselDeleteTask(e)}
						title="No"
						nameValue="canselDelete"
					/>
				</span>
			</div>
			;
		</ModalContainer>
	);
};
