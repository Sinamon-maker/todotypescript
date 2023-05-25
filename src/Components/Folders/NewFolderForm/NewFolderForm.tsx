import React, { useState } from 'react';
import { serverTimestamp } from 'firebase/firestore';
import { AppButton } from '../../../Module/Button/Apbutton';

import { AppInput } from '../../../Module/Input/Input';
import { styleType } from '../../../styles/styles';
import { Folder } from '../../../globalTypes';
import useCollection from '../../../Hooks/useCollection';
import useChangeFolderStore from '../../../store/folderStore';

import { useAuth } from '../../../Context/useAuth';
import { ErrorMessage } from '../../ErrorMessage/ErrorMessage';

type Props = {
	folders: Folder[];
};

export const NewFolderForm = ({ folders }: Props) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');
	const [isDisabled, setDisableSave] = useState(true);

	const { logoName } = useAuth();

	const { error: errorAddingFolder, addDocument } = useCollection('folders');
	const setCurrentFolder = useChangeFolderStore((s) => s.setCurrentFolder);

	const onChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLInputElement) {
			setError('');
			if (e.target.value.trim().length < 3) setDisableSave(true);
			if (e.target.value.trim().length >= 3) setDisableSave(false);
			setValue(e.target.value);
		}
	};

	const createNewFolder = async (folder: string) => {
		const folderNew = { name: folder, userId: logoName?.uid, createdAt: serverTimestamp() };

		try {
			const res = await addDocument(folderNew);
			if (res) {
				setCurrentFolder(res);
			}
		} catch (err) {
			console.log('err adding folder', err);
		}
	};

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (folders) {
			const isExist = folders.find((it) => it.name === value);
			if (isExist) {
				setError('this folder not unique');
				return;
			}
		}
		createNewFolder(value);
		setValue('');
	};

	return (
		<form onSubmit={onSubmit} className=" w-full mt-6">
			<ErrorMessage message={errorAddingFolder} />
			<ErrorMessage message={error} />
			<div className="w-full border-2 border-sky-800 p-2 rounded flex items-center">
				<AppInput style="w-full bg-transparent" placeholder="Add new folder" value={value} onChange={onChange} />
				<AppButton
					style={styleType.buttonStyle}
					disabled={isDisabled}
					ariaLabel=""
					type="submit"
					nameValue="addFolder"
					title="Add"
					onClick={() => console.log('add folder')}
				/>
			</div>
		</form>
	);
};
