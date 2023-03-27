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

	useEffect(() => {
		const list = findTasks(logoName);

		if (list) {
			const editTask = list.find((task) => task.created === idEditTask);
			setText(editTask?.text ?? '');
		}
	}, [logoName, idEditTask]);

	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLInputElement) {
			setText(e.target.value);
		}
	};

	return (
		<ModalContainer>
			<div className="w-80  p-4 pb-8 rounded bg-white">
				<form onSubmit={onSubmit} className="w-full max-w-md m-auto bg-fill-main rounded p-10 pb-8 shadow-lg" name="onEdit">
					<AppInput
						style="appearance-none bg-transparent border-none w-full text-skin-base mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						nameValue="edit"
						value={text}
						placeholder=""
						ariaLabel="Full name"
						onChange={handleChange}
					/>
					<span className="block w-full flex justify-around">
						<AppButton style="" title="Yes" nameValue="confirmEdit" type="submit" />
						<AppButton style="" onClick={(e) => onCanselEditClick(e)} title="No" nameValue="canselEdit" />
					</span>
				</form>
			</div>
			;
		</ModalContainer>
	);
};
