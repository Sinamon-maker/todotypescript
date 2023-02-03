import React, { useState, useContext } from 'react';
import { TaskContext } from '../../Context/TaskContext';
import { AppButton } from '../../Module/Button/Button';
import { AppInput } from '../../Module/Input/Input';

export const NewTaskForm = () => {
	const [taskName, setTaskName] = useState('');
	const [disableSave, setDisableSave] = useState(true);

	const { onNewTask } = useContext(TaskContext);

	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLInputElement) {
			const newValue = e.target.value;
			setTaskName(newValue);

			if (e.target.value.length > 2) {
				setDisableSave(false);
			}
			if (e.target.value.length < 3) {
				setDisableSave(true);
			}
		}
	};

	const onSubmit = (e: React.FormEvent<EventTarget>): void => {
		e.preventDefault();
		onNewTask(taskName);
		setTaskName('');
		setDisableSave(true);
	};

	const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter') {
			onSubmit(e);
		}
	};

	return (
		<form onSubmit={(e) => onSubmit(e)} className="w-full max-w-xl  rounded px-6 sm:px-10 pt-4 pb-0 " name="newTask">
			<div className="flex items-center border-b border-teal-500 py-2">
				<AppInput
					style="appearance-none bg-transparent border-none w-full text-gray-400 text-slate-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
					type="text"
					nameValue="task"
					value={taskName}
					placeholder="Buy products"
					ariaLabel="Full name"
					onChange={handleChange}
					onKeyDown={onPressEnter}
				/>

				<AppButton
					style="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 disabled:opacity-25 text-sm border-4 text-white py-1 px-2 rounded shadow-lg"
					type="submit"
					nameValue="addTask"
					disabled={disableSave}
					title="Save"
				/>
			</div>
		</form>
	);
};