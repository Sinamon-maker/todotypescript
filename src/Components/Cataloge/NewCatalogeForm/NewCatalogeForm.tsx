import React, { useState, useContext, useRef, useEffect } from 'react';
import { serverTimestamp } from 'firebase/firestore';
import { UserContext } from '../../../Context/userContext';
import useCollection from '../../../Hooks/useCollection';

import { AppButton } from '../../../Module/Button/Button';
import { AppInput } from '../../../Module/Input/Input';
import { Container } from '../../../Module/Container/Container';
import useChangeFolderStore from '../../../store/folderStore';

import { styleType } from '../../../styles/styles';

export const NewCatalogeForm = () => {
	const [taskName, setTaskName] = useState('');
	const [disableSave, setDisableSave] = useState(true);

	const currentFolder = useChangeFolderStore((s) => s.currentFolder);

	const { error, addDocument } = useCollection('tasks');
	const { logoName } = useContext(UserContext);

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLInputElement) {
			console.log(e.target.value);
			const neVal = e.target.value;
			if (neVal.length < 3) setDisableSave(true);
			if (neVal.length >= 3) setDisableSave(false);
			setTaskName(neVal);
		}
	};

	const onSubmit = async (e: React.FormEvent<EventTarget>): Promise<void> => {
		e.preventDefault();

		if (taskName.length >= 3) {
			const newTask = {
				title: taskName,
				userId: logoName?.uid,
				displayName: logoName?.displayName,
				createdAt: serverTimestamp(),
				tasks: [],
				folder: currentFolder?.id,
			};
			console.log(newTask);
			await addDocument(newTask);
			setTaskName('');
			setDisableSave(true);
		}
	};

	const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter') {
			onSubmit(e);
		}
	};

	return (
		<Container>
			<form onSubmit={(e) => onSubmit(e)} className="w-full max-w-xl  rounded  px-2 pt-2 sm:pt-4 pb-0 " name="newCataloge">
				<div className="flex items-center border-b border-fill-weak py-2">
					<AppInput
						style=" bg-transparent border-none w-full  text-skin-base mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						nameValue="task"
						value={taskName}
						placeholder="Enter a name of cataloge"
						ariaLabel="Full name"
						onChange={handleChange}
						onKeyDown={onPressEnter}
						inputRef={inputRef}
					/>

					<AppButton style={styleType.buttonStyle} type="submit" nameValue="addTask" title="Save" disabled={disableSave} />
				</div>
			</form>
		</Container>
	);
};
