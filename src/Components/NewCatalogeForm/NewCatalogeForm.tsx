import React, { useState, useContext } from 'react';

import { AppButton } from '../../Module/Button/Button';
import { AppInput } from '../../Module/Input/Input';

export const NewCatalogeForm = () => {
	const [taskName, setTaskName] = useState('');
	const [disableSave, setDisableSave] = useState(true);

	//const { onNewTask } = useContext(TaskContext);

	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLInputElement) {
			console.log(e.target.value);
		}
	};

	const onSubmit = (e: React.FormEvent<EventTarget>): void => {
		e.preventDefault();
		console.log(taskName);
	};

	const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter') {
			onSubmit(e);
		}
	};

	return (
		<form onSubmit={(e) => onSubmit(e)} className="w-full max-w-xl  rounded  px-2 pt-4 pb-0 " name="newCataloge">
			<div className="flex items-center border-b border-fill-weak py-2">
				<AppInput
					style="appearance-none bg-transparent border-none w-full  text-skin-base mr-3 py-1 px-2 leading-tight focus:outline-none"
					type="text"
					nameValue="task"
					value={taskName}
					placeholder="Enter a name of cataloge"
					ariaLabel="Full name"
					onChange={handleChange}
					onKeyDown={onPressEnter}
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
