import React from 'react';
import useChangeCatalogueStore from '../../../store/catalogueStore';

import { ModalDelete } from '../../ModalDelete/ModalDelete';
import { deleteDocument } from '../../../api/deleteDocument';

type Props = {
	children: React.ReactNode;
};

export const CatalogueContainer = ({ children }: Props) => {
	const idCatalogueDel = useChangeCatalogueStore((s) => s.idCatalogueDel);
	const setIdCatalogueDel = useChangeCatalogueStore((s) => s.setIdCatalogueDel);

	const confirmDeleteCatalogue = async () => {
		try {
			await deleteDocument('tasks', idCatalogueDel);
		} catch (err) {
			console.log(err);
		}
		setIdCatalogueDel('');
	};

	const canselDeleteCatalogue = () => {
		setIdCatalogueDel('');
	};

	return (
		<div className="flex flex-col grow gap-2 text-skin-base">
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
