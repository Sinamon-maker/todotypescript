import React from 'react';
import { AppButton } from '../../Module/Button/Button';
import { ModalContainer } from '../../Module/ModuleContainer/ModalContainer';

type Props = {
	deleteCatalogue: () => void;
	canselDeleteCatalogue: () => void;
};

export const ModalDeleteCatalogue = ({ deleteCatalogue, canselDeleteCatalogue }: Props) => {
	const onConfirmDeleteClick = () => {
		deleteCatalogue();
	};
	const onCanselDeleteCatalogue = () => {
		canselDeleteCatalogue();
	};

	return (
		<ModalContainer close={onCanselDeleteCatalogue}>
			<div className="w-80  p-4 py-6 pl-6 rounded bg-fill-main text-skin-base">
				<h3>Are you sure?</h3>
				<p className="my-4">Do you whant to delete This Catalogue? Catalogue will be deleted with all its content.</p>
				<span className="block w-full flex justify-around">
					<AppButton
						style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg"
						onClick={onConfirmDeleteClick}
						title="Yes"
						nameValue="confirmDelete"
					/>
					<AppButton
						style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg"
						onClick={onCanselDeleteCatalogue}
						title="No"
						nameValue="canselDelete"
					/>
				</span>
			</div>
			;
		</ModalContainer>
	);
};
