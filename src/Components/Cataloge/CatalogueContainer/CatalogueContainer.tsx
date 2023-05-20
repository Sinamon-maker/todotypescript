import React, { useEffect } from 'react';
import useChangeCatalogueStore from '../../../store/catalogueStore';

import { Folder } from '../../../globalTypes';
import { ModalDelete } from '../../ModalDelete/modalDelete';

type Props = {
	children: React.ReactNode;
	folders: Folder[];
};

export const CatalogueContainer = ({ children, folders }: Props) => {
	const idFolderRename = useChangeCatalogueStore((s) => s.idFolderRename);
	const setFolderRename = useChangeCatalogueStore((s) => s.setFolderRename);
	const idFolderDelete = useChangeCatalogueStore((s) => s.idFolderDelete);
	const setFolderDel = useChangeCatalogueStore((s) => s.setFolderDel);
	const newFolder = useChangeCatalogueStore((s) => s.newFolder);
	const setNewFolder = useChangeCatalogueStore((s) => s.setNewFolder);
	const idCatalogueDel = useChangeCatalogueStore((s) => s.idCatalogueDel);
	const setIdCatalogueDel = useChangeCatalogueStore((s) => s.setIdCatalogueDel);

	useEffect(() => {
		if (newFolder) {
			createNewFolder(newFolder);
		}
	}, [newFolder]);

	const createNewFolder = async (folder: Partial<Folder>) => {
		//addDocument
	};

	const confirmDeleteCatalogue = () => {
		//delCatalogue
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
