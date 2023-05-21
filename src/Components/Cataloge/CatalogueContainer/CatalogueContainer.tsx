import React, { useEffect } from 'react';
import useChangeCatalogueStore from '../../../store/catalogueStore';
import useChangeFolderStore from '../../../store/folderStore';

import { Folder } from '../../../globalTypes';
import { ModalDelete } from '../../ModalDelete/modalDelete';
import { deleteTask } from '../../../api/deleteDocument';
import useCollection from '../../../Hooks/useCollection';
import { useAuth } from '../../../Context/useAuth';
import { serverTimestamp } from 'firebase/firestore';

type Props = {
	children: React.ReactNode;
	folders: Folder[];
};

export const CatalogueContainer = ({ children, folders }: Props) => {
	const { logoName } = useAuth();
	const idFolderRename = useChangeFolderStore((s) => s.idFolderRename);
	const setFolderRename = useChangeFolderStore((s) => s.setFolderRename);
	const idFolderDelete = useChangeFolderStore((s) => s.idFolderDelete);
	const setFolderDel = useChangeFolderStore((s) => s.setFolderDel);
	const newFolder = useChangeFolderStore((s) => s.newFolder);
	const setNewFolder = useChangeFolderStore((s) => s.setNewFolder);
	const idCatalogueDel = useChangeCatalogueStore((s) => s.idCatalogueDel);
	const setIdCatalogueDel = useChangeCatalogueStore((s) => s.setIdCatalogueDel);

	const { error, addDocument } = useCollection('folders');
	console.log('idCatalogueDel', idCatalogueDel);
	useEffect(() => {
		if (newFolder) {
			createNewFolder(newFolder);
		}
	}, [newFolder]);

	const createNewFolder = async (folder: string) => {
		const newFolder = { name: folder, userId: logoName?.uid, createdAt: serverTimestamp() };
		console.log('newFolder');
		try {
			await addDocument(newFolder);
		} catch (err) {
			console.log('err adding folder', err);
		}
	};

	const confirmDeleteCatalogue = async () => {
		try {
			await deleteTask('tasks', idCatalogueDel);
		} catch (err) {
			console.log(err);
		}
		setIdCatalogueDel('');
	};

	const canselDeleteCatalogue = () => {
		setIdCatalogueDel('');
	};

	return (
		<div className="w-full h-full  flex  gap-2 ">
			{children}
			{idCatalogueDel && (
				<ModalDelete
					title="Are you sure you want to delete this catalogue and all tasks"
					confirmDeleteClick={confirmDeleteCatalogue}
					canselDelete={canselDeleteCatalogue}
				/>
			)}
		</div>
	);
};
