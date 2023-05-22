import React, { useEffect, useState } from 'react';

import { AppButton } from '../../../Module/Button/Button';

import { AppInput } from '../../../Module/Input/Input';
import { styleType } from '../../../styles/styles';
import { Folder } from '../../../globalTypes';
import useChangeFolderStore, { folderAll } from '../../../store/folderStore';

import { FolderItem } from '../FolderItem/FolderItem';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
	folders: Folder[];
};

export const SideBar = ({ folders }: Props) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');
	const [isDisabled, setDisableSave] = useState(true);

	const [isOpenSidebar, setOpenSideBar] = useState(false);

	const setNewFolder = useChangeFolderStore((s) => s.setNewFolder);
	const setCurrentFolder = useChangeFolderStore((s) => s.setCurrentFolder);

	useEffect(() => {
		if (folders.length > 1) {
			setCurrentFolder(folderAll);
		}
	}, []);

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

	const closeStyle = 'w-0 static';
	const openStyle = 'absolute inset-y-0 w-3/4 z-40';
	const stylenormal =
		'p-4 sm:relative ssm:w-1/2 sm:w-1/3 h-full bg-violet-900 sm:bg-transparent sm:border sm:border-fill-weak flex flex-col rounded  overflow-hidden   text-skin-base  transition-all';
	const togglePart = isOpenSidebar ? openStyle : closeStyle;

	const styleSideBar = togglePart + stylenormal;

	return (
		<>
			<aside className={`${styleSideBar}`}>
				<AppButton
					style={!isOpenSidebar ? 'absolute p-2 sm:hidden' : 'absolute p-2 sm:hidden right-0.5'}
					ariaLabel=""
					type="button"
					nameValue="addFolder"
					title="Add"
					onClick={() => setOpenSideBar(!isOpenSidebar)}
					Icon={!isOpenSidebar ? <AiOutlineMenu /> : <AiOutlineClose />}
				/>
				<div className="p-8 ssm:pl-10 grow">
					<h2 className="text-lg ssm:text-xl my-6 underline underline-offset-4">Folders</h2>

					{folders.length !== 0 && (
						<>
							{folders.length > 1 && <FolderItem folderItem={folderAll} />}
							<ul className=" my-4">
								{folders.map((it) => (
									<FolderItem key={it.id} folderItem={it} />
								))}
							</ul>
						</>
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
		</>
	);
};
