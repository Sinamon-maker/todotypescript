import React from 'react';

import { AppButton } from '../../../Module/Button/Button';

import { styleType } from '../../../styles/styles';
import { Folder } from '../../../globalTypes';

import useChangeFolderStore from '../../../store/folderStore';

import { IconComponent } from '../../../Icons/Icon';

type Props = {
	folderItem: Folder;
};

export const FolderItem = ({ folderItem }: Props) => {
	const currentFolder = useChangeFolderStore((s) => s.currentFolder);
	const setCurrentFolder = useChangeFolderStore((s) => s.setCurrentFolder);

	const disabled = () => folderItem.id === currentFolder;

	const onFolderClick = () => {
		setCurrentFolder(folderItem.id);
	};

	return (
		<li className="flex items-center w-full mb-4">
			<IconComponent style="w-8 h-8 sm:w-8 sm:h-8  text-orange-700" Icon={disabled() ? 'openFolder' : 'folder'} />

			<AppButton style={styleType.transparent} type="button" nameValue="allTask" disabled={disabled()} title={folderItem.name} onClick={onFolderClick} />
		</li>
	);
};
