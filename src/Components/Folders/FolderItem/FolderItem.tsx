import React, { useState } from 'react';

import { AppButton } from '../../../Module/Button/Button';

import { styleType } from '../../../styles/styles';
import { Folder } from '../../../globalTypes';

import useChangeFolderStore from '../../../store/folderStore';
import FolderIcon from '../../../Images/folder.svg';
import FolderOpenIcon from '../../../Images/folder-open.svg';
import { AiFillFolder } from 'react-icons/ai';
import { AiFillFolderOpen } from 'react-icons/ai';

type Props = {
	folderItem: Folder;
};

export const FolderItem = ({ folderItem }: Props) => {
	const currentFolder = useChangeFolderStore((s) => s.currentFolder);
	const setCurrentFolder = useChangeFolderStore((s) => s.setCurrentFolder);

	const disabled = currentFolder && folderItem.id === currentFolder.id ? true : false;

	const onFolderClick = () => {
		console.log('click folder', currentFolder);
		setCurrentFolder(folderItem);
	};

	return (
		<li className="flex items-center w-full mb-4">
			{!disabled && <AiFillFolder className="w-4 h-4 sm:w-6 sm:h-6 text-orange-700" />}
			{disabled && <AiFillFolderOpen className="w-4 h-4 sm:w-6 sm:h-6  text-orange-700" />}
			<AppButton style={styleType.transparent} type="button" nameValue="allTask" disabled={disabled} title={folderItem.name} onClick={onFolderClick} />
		</li>
	);
};
