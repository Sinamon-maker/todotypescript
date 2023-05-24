import React from 'react';
import useChangeCatalogueStore from '../../../store/catalogueStore';

import { Data, Folder } from '../../../globalTypes';
import { ModalDelete } from '../../ModalDelete/modalDelete';
import { deleteTask } from '../../../api/deleteDocument';

import { useAuth } from '../../../Context/useAuth';

type Props = {
	children: React.ReactNode;
	documents: Data[];
};

export const CatalogueContainer = ({ children, documents }: Props) => {
	const { logoName } = useAuth();

	const idCatalogueDel = useChangeCatalogueStore((s) => s.idCatalogueDel);
	const setIdCatalogueDel = useChangeCatalogueStore((s) => s.setIdCatalogueDel);

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
		<div className="flex flex-col grow gap-2">
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
