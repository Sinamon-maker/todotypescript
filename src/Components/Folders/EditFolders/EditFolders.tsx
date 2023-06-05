import React from 'react';
import useChangeFolderStore from '../../../store/folderStore';
import { AppButton } from '../../../Module/Button/Apbutton';
import { styleType } from '../../../styles/styles';

export const EditFolders = () => {
	const setFolderDel = useChangeFolderStore((s) => s.setFolderDel);
	const setFolderRename = useChangeFolderStore((s) => s.setFolderRename);
	const currentFolder = useChangeFolderStore((s) => s.currentFolder);

	const onClickDel = () => {
		setFolderDel(currentFolder);
	};

	const onClickEdit = () => {
		setFolderRename(currentFolder);
	};

	if (currentFolder === 'all') return null;

	return (
		<span className="flex ">
			<AppButton title="" style={styleType.icon} nameValue="edit" onClick={onClickEdit} iconStyle="w-4 h-4" ariaLabel="editTask" Icon="edit" />

			<AppButton title="" style={styleType.icon} nameValue="deleteTask" iconStyle="w-4 h-4" ariaLabel="deleteTask" onClick={onClickDel} Icon="delete" />
		</span>
	);
};
