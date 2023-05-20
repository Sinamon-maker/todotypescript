import React, { useState } from 'react';

import { AppButton } from '../../../Module/Button/Button';

import { AppInput } from '../../../Module/Input/Input';
import { styleType } from '../../../styles/styles';
import { Folders, Folder } from '../../../globalTypes';
import useChangeCatalogueStore from '../../../store/catalogueStore';

import { useAuth } from '../../../Context/useAuth';

type Props = {
	folders: Folder[];
};

export const SideBar = ({ folders }: Props) => {
	const { logoName } = useAuth();
	const [value, setValue] = useState('');
	const [error, setError] = useState('');
	const [isDisabled, setDisableSave] = useState(true);

	const setNewFolder = useChangeCatalogueStore((s) => s.setNewFolder);

	const onChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLInputElement) {
			setError('');
			if (e.target.value.length < 3) setDisableSave(true);
			if (e.target.value.length >= 3) setDisableSave(false);
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

		//addDocument

		setNewFolder({ name: value, userId: logoName?.uid });
		setValue('');
	};

	return (
		<aside className=" p-4 w-1/3 h-full flex flex-col rounded text-skin-base border border-fill-weak">
			<h2 className="text-lg">Folders</h2>
			<div className="grow  ">
				{folders.length !== 0 && (
					<ul className=" my-4">
						{folders.map((it) => (
							<li key={it.id}>{it.name}</li>
						))}
					</ul>
				)}
				{folders.length == 0 && <p>No folders yet. Start creating</p>}
			</div>
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
		</aside>
	);
};
