import React, { useState, useContext, useEffect, useRef } from 'react';
import { TaskContext } from '../../../Context/taskContext';
import { AppButton } from '../../../Module/Button/Button';
import { AppInput } from '../../../Module/Input/Input';
import useChangeTaskQueryStore from '../../../store/tasksStore';

export const NewTaskForm = () => {
	const [taskName, setTaskName] = useState('');
	const [disableSave, setDisableSave] = useState(true);

	const setNewTask = useChangeTaskQueryStore((s) => s.setNewTask);

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		console.log('inputRef', inputRef.current);
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

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
		setNewTask({ text: taskName, created: +new Date(), status: false });
		setTaskName('');
		setDisableSave(true);
	};

	const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter') {
			onSubmit(e);
		}
	};

	return (
		<form onSubmit={(e) => onSubmit(e)} className="w-full max-w-xl  rounded px-6 sm:px-10 pt-2 sm:pt-4 pb-0 " name="newTask">
			<div className="flex items-center border-b border-fill-weak py-2">
				<AppInput
					style="appearance-none bg-transparent border-none w-full  text-skin-base mr-3 py-1 px-2 leading-tight focus:outline-none"
					type="text"
					nameValue="task"
					value={taskName}
					placeholder="Buy products"
					ariaLabel="Full name"
					onChange={handleChange}
					onKeyDown={onPressEnter}
					inputRef={inputRef}
				/>

				<AppButton
					style="flex-shrink-0 bg-fill-weak hover:bg-fill-strong border-fill-weak hover:border-fill-strong disabled:opacity-25 text-sm border-4 text-skin-base py-1 px-2 rounded shadow-lg"
					type="submit"
					nameValue="addTask"
					disabled={disableSave}
					title="Save"
				/>
			</div>
		</form>
	);
};
