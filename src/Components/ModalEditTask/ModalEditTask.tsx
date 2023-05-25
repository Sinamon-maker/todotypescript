import React, { useState, useRef } from 'react';
import { Task } from '../../globalTypes';
import { AppButton } from '../../Module/Button/Apbutton';
import { AppInput } from '../../Module/Input/Input';
import { AppTextarea } from '../../Module/TextArea/AppTextarea';
import { ModalContainer } from '../../Module/ModuleContainer/ModalContainer';

type Props = {
	taskEdit: Task;
	canselEditTask: () => void;
	changeTask: (val: Task) => void;
};

export const ModalEditTask = ({ taskEdit, canselEditTask, changeTask }: Props) => {
	const [task, setText] = useState(taskEdit);

	const onSubmit = (e: React.FormEvent<EventTarget>): void => {
		e.preventDefault();
		changeTask(task);
	};

	const onCanselEditClick = () => {
		canselEditTask();
	};

	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLInputElement) {
			setText({ ...task, text: e.target.value });
		}
	};
	const onChangeText = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLTextAreaElement) {
			setText({ ...task, detailes: e.target.value });
		}
	};

	return (
		<ModalContainer close={onCanselEditClick}>
			<div className="w-80 sm:w-1/2   rounded bg-white">
				<form onSubmit={onSubmit} className="w-full  m-auto bg-fill-main rounded pt-10 px-4 pb-8 shadow-lg" name="onEdit">
					<div className="flex items-center border-b border-fill-weak mb-2  py-2">
						<AppInput
							style=" bg-transparent  w-full text-skin-base  mr-3 py-1 px-2 leading-tight focus:outline-none"
							type="text"
							nameValue="edit"
							value={task.text}
							placeholder=""
							ariaLabel="Full name"
							onChange={handleChange}
							inputRef={inputRef}
						/>
					</div>
					<div className="flex items-center border-b border-fill-weak mb-6  py-2">
						<AppTextarea style="block bg-transparent h-16 w-full mt-2 text-skin-base rounded" value={task?.detailes || ''} onChangeText={onChangeText} />
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
							onClick={onCanselEditClick}
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
