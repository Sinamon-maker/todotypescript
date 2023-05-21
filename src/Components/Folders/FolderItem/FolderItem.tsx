import React, { useState } from 'react';

import { AppButton } from '../../../Module/Button/Button';

import { styleType } from '../../../styles/styles';
import { Folder } from '../../../globalTypes';

import useChangeFolderStore from '../../../store/folderStore';

import { useAuth } from '../../../Context/useAuth';

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
		<li className="">
			<AppButton style={styleType.link} type="button" nameValue="allTask" title={folderItem.name} disabled={disabled} onClick={onFolderClick} />
		</li>
	);
};
