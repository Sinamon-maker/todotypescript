import React, { ReactNode } from 'react';

import { Data, Folder } from '../../globalTypes';
import useChangeFolderStore from '../../store/folderStore';

import { ModalDelete } from '../ModalDelete/ModalDelete';
import { deleteFolder } from '../../api/deleteFolder';
import { ModalEditFolder } from '../ModalEditFolder/ModalEditFolder';

import { updateField } from '../../api/updateDocument';

type Props = {
	folders: Folder[];
	documents: Data[];
	children: ReactNode;
};
export const MyCataloguePageContainer = ({ folders, documents, children }: Props) => {
	const idFolderDelete = useChangeFolderStore((s) => s.idFolderDelete);
	const setFolderDel = useChangeFolderStore((s) => s.setFolderDel);
	const idFolderRename = useChangeFolderStore((s) => s.idFolderRename);
	const setFolderRename = useChangeFolderStore((s) => s.setFolderRename);

	const folderEdit = folders.find((it) => it.id === idFolderRename);

	const confirmDeleteClick = async () => {
		const listTaskToDel = documents.filter((it) => it.folder === idFolderDelete).map((it) => it.id);

		await deleteFolder(idFolderDelete, listTaskToDel);
		setFolderDel('');
	};
	const canselDelete = () => {
		console.log(idFolderDelete);
		setFolderDel('');
	};

	const canselEditFolder = () => {
		setFolderRename('');
	};

	const confirmEditFolder = async (fold: Folder) => {
		await updateField('folders', { name: fold.name }, fold.id);
		setFolderRename('');
	};

	return (
		<div className="w-full h-full  flex  gap-2 relative">
			{idFolderDelete && <ModalDelete title="" confirmDeleteClick={confirmDeleteClick} canselDelete={canselDelete} />}
			{idFolderRename && folderEdit && <ModalEditFolder folder={folderEdit} canselEditFolder={canselEditFolder} confirmEditFolder={confirmEditFolder} />}
			{children}
		</div>
	);
};
