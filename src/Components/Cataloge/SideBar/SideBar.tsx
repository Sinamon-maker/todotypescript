import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppButton } from '../../../Module/Button/Button';

import { AppInput } from '../../../Module/Input/Input';
import { styleType } from '../../../styles/styles';
import { UsersCollection } from '../../../globalTypes';
import { setDefaultResultOrder } from 'dns';

type Props = {
	folders: UsersCollection | null;
};

export const SideBar = ({ folders }: Props) => {
	const { userId } = useParams();
	const [value, setValue] = useState('');
	const [error, setError] = useState('');
	const [isDisabled, setDisableSave] = useState(true);

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
			const isExist = folders.folders.find((it) => it === value);
			if (!isExist) {
				const updatedFolders = [...folders.folders, value];
			} else {
				setError('this folder not unique');
			}
			//updateDoc
		} else {
			const newFolder = {
				userId,
				folders: [value],
			};
			//addDocument
		}
		console.log(value);
		setValue('');
	};

	return (
		<aside className=" p-4 w-1/3 h-full rounded text-skin-base border border-fill-weak">
			<h2 className="text-lg">Folders</h2>
			<div className="h-full flex flex-col ">
				{folders && (
					<ul className="grow my-4">
						{folders.folders.map((it) => (
							<li key={it}>{it}</li>
						))}
					</ul>
				)}
				{!folders && <p>No folders yet. Start creating</p>}
				<form onSubmit={onSubmit} className="h-full w-full mt-6">
					<div className="w-full border-2 border-sky-800 p-2 rounded flex ">
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
			</div>
		</aside>
	);
};
