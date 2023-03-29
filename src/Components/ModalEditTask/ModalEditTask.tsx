import React, { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../../Context/taskContext';
import { UserContext } from '../../Context/UserContext';
import { AppButton } from '../../Module/Button/Button';
import { AppInput } from '../../Module/Input/Input';
import { ModalContainer } from '../../Module/ModuleContainer/ModalContainer';
import { findTasks } from '../../Utils';

export const ModalEditTask = () => {
	const [text, setText] = useState('');
	const { changeTask, canselEditTask, idEditTask } = useContext(TaskContext);
	const logoName = useContext(UserContext);

	const onSubmit = (e: React.FormEvent<EventTarget>): void => {
		e.preventDefault();
		changeTask(text, idEditTask);
	};

	const onCanselEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		canselEditTask();
	};

	//	useEffect(() => {
	//		const list <Array>Task = [];

	//		if (list.length) {
	//			const editTask = list.find((task) => task.created === idEditTask);
	//			setText(editTask?.text ?? '');
	//		}
	//	}, [logoName, idEditTask]);

	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLInputElement) {
			setText(e.target.value);
		}
	};

	return (
		<ModalContainer close={canselEditTask}>
			<div className="w-80   rounded bg-white">
				<form onSubmit={onSubmit} className="w-full max-w-md m-auto bg-fill-main rounded pt-10 px-4 pb-8 shadow-lg" name="onEdit">
					<div className="flex items-center border-b border-fill-weak mb-6  py-2">
						<AppInput
							style=" bg-transparent  w-full text-skin-base  mr-3 py-1 px-2 leading-tight focus:outline-none"
							type="text"
							nameValue="edit"
							value={text}
							placeholder=""
							ariaLabel="Full name"
							onChange={handleChange}
						/>
					</div>
					<span className="block w-full flex justify-around">
						<AppButton
							style="flex-shrink-0 bg-fill-weak hover:bg-fill-strong border-fill-weak hover:border-fill-strong disabled:opacity-25 text-sm border-4 text-skin-base py-1 px-2 rounded shadow-lg"
							title="Save"
							nameValue="confirmEdit"
							type="submit"
						/>
						<AppButton
							style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg"
							onClick={(e) => onCanselEditClick(e)}
							title="Cansel"
							nameValue="canselEdit"
						/>
					</span>
				</form>
			</div>
			;
		</ModalContainer>
	);
};
