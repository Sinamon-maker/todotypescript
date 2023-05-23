import React, { useState, useRef, useEffect } from 'react';
import { serverTimestamp } from 'firebase/firestore';

import useCollection from '../../../Hooks/useCollection';

import { AppButton } from '../../../Module/Button/Button';
import { AppInput } from '../../../Module/Input/Input';
import { Container } from '../../../Module/Container/Container';
import useChangeFolderStore from '../../../store/folderStore';

import { styleType } from '../../../styles/styles';
import { useAuth } from '../../../Context/useAuth';
import { ErrorMessage } from '../../ErrorMessage/ErrorMessage';

export const NewCatalogeForm = () => {
	const [taskName, setTaskName] = useState('');
	const [disableSave, setDisableSave] = useState(true);
	const [errorSubmit, setErrorSubmit] = useState('');

	const currentFolder = useChangeFolderStore((s) => s.currentFolder);

	const { error: errorAddingDocument, addDocument } = useCollection('tasks');
	const { logoName } = useAuth();

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
			if (neVal.trim().length < 3) setDisableSave(true);
			if (neVal.trim().length >= 3) setDisableSave(false);
			setTaskName(neVal);
		}
	};

	const onSubmit = async (e: React.FormEvent<EventTarget>): Promise<void> => {
		e.preventDefault();

		if (taskName.trim().length >= 3 && currentFolder && currentFolder.id !== 'all') {
			const newTask = {
				title: taskName,
				userId: logoName?.uid,
				displayName: logoName?.displayName,
				createdAt: serverTimestamp(),
				tasks: [],
				folder: currentFolder?.id,
			};

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
				{(!currentFolder || currentFolder.id === 'all') && <ErrorMessage message="Choose folder" />}
				<ErrorMessage message={errorAddingDocument} />
			</form>
		</Container>
	);
};
