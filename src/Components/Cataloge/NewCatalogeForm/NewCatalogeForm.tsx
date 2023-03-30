import React, { useState, useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';
import useCollection from '../../../Hooks/useCollection';
import { serverTimestamp } from 'firebase/firestore';

import { AppButton } from '../../../Module/Button/Button';
import { AppInput } from '../../../Module/Input/Input';

export const NewCatalogeForm = () => {
	const [taskName, setTaskName] = useState('');
	const [disableSave, setDisableSave] = useState(true);

	const { error, addDocument } = useCollection('tasks');
	const { logoName } = useContext(UserContext);

	//const { onNewTask } = useContext(TaskContext);

	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLInputElement) {
			console.log(e.target.value);
			const neVal = e.target.value;
			setTaskName(neVal);
		}
	};

	const onSubmit = async (e: React.FormEvent<EventTarget>): Promise<void> => {
		e.preventDefault();

		if (taskName.length > 3) {
			const newTask = {
				title: taskName,
				userId: logoName?.uid,
				displayName: logoName?.displayName,
				createdAt: serverTimestamp(),
				tasks: [],
			};
			console.log(newTask);
			await addDocument(newTask);
		}
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
					title="Save"
				/>
			</div>
		</form>
	);
};
