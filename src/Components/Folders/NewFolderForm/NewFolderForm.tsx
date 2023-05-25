import React, { useState } from 'react';

import { AppButton } from '../../../Module/Button/Button';

import { AppInput } from '../../../Module/Input/Input';
import { styleType } from '../../../styles/styles';
import { Folder } from '../../../globalTypes';
import useChangeFolderStore from '../../../store/folderStore';

type Props = {
	folders: Folder[];
};

export const NewFolderForm = ({ folders }: Props) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');
	const [isDisabled, setDisableSave] = useState(true);

	const setNewFolder = useChangeFolderStore((s) => s.setNewFolder);

	const onChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLInputElement) {
			setError('');
			if (e.target.value.trim().length < 3) setDisableSave(true);
			if (e.target.value.trim().length >= 3) setDisableSave(false);
			setValue(e.target.value);
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
		setNewFolder(value);
		setValue('');
	};

	return (
		<form onSubmit={onSubmit} className=" w-full mt-6">
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
			<p className="">{error}</p>
		</form>
	);
};
