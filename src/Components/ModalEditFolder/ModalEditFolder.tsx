import React, { useState, useRef } from 'react';
import { Folder } from '../../globalTypes';
import { AppButton } from '../../Module/Button/Apbutton';
import { AppInput } from '../../Module/Input/Input';

import { ModalContainer } from '../../Module/ModuleContainer/ModalContainer';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

type Props = {
	folder: Folder;
	canselEditFolder: () => void;
	confirmEditFolder: (val: Folder) => void;
};

export const ModalEditFolder = ({ folder, canselEditFolder, confirmEditFolder }: Props) => {
	const [folderName, setFolderName] = useState('');
	const [error, setError] = useState('');

	const onSubmit = (e: React.FormEvent<EventTarget>): void => {
		e.preventDefault();
		if (folderName.trim() === folder.name) {
			setError('Name is the same');
			return;
		}
		setError('');
		confirmEditFolder({ ...folder, name: folderName });
	};

	const onCanselEditClick = () => {
		setError('');
		canselEditFolder();
	};

	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLInputElement) {
			setError('');
			setFolderName(e.target.value);
		}
	};

	return (
		<ModalContainer close={onCanselEditClick}>
			<div className="w-80 sm:w-1/2   rounded bg-white">
				<form onSubmit={onSubmit} className="w-full  m-auto bg-fill-main rounded pt-10 px-4 pb-8 shadow-lg" name="onEdit">
					<p className="text-skin-base">
						Change name from: <span>{folder.name}</span>
					</p>
					<div className="flex items-center border-b border-fill-weak mb-2  py-2">
						<AppInput
							style=" bg-transparent  w-full text-skin-base  mr-3 py-1 px-2 leading-tight focus:outline-none"
							type="text"
							nameValue="edit"
							value={folderName}
							placeholder=""
							ariaLabel="Full name"
							onChange={handleChange}
							inputRef={inputRef}
						/>
					</div>
					{error && <ErrorMessage message={error} />}

					<span className="block w-full flex justify-around">
						<AppButton
							style="flex-shrink-0 bg-fill-weak hover:bg-fill-strong border-fill-weak hover:border-fill-strong disabled:opacity-25 text-sm border-4 text-skin-base py-1 px-2 rounded shadow-lg"
							title="Save"
							nameValue="confirmEdit"
							type="submit"
						/>
						<AppButton
							style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg"
							onClick={onCanselEditClick}
							title="Cansel"
							nameValue="canselEdit"
						/>
					</span>
				</form>
			</div>
			;
		</ModalContainer>
	);
};
