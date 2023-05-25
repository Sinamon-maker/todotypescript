import React from 'react';

import { AppButton } from '../../Module/Button/Apbutton';
import { ModalContainer } from '../../Module/ModuleContainer/ModalContainer';

type Props = {
	confirmDeleteClick: () => void;
	canselDelete: () => void;
	title: string;
};

export const ModalDelete = ({ confirmDeleteClick, canselDelete, title }: Props) => {
	const onConfirmDeleteClick = () => {
		confirmDeleteClick();
	};
	const onCanselDelete = () => {
		canselDelete();
	};

	return (
		<ModalContainer close={canselDelete}>
			<div className="w-80  p-4 py-6 pl-6 rounded bg-fill-main text-skin-base">
				<h3>Are you sure?</h3>
				<p className="my-4">{title}</p>
				<span className="block w-full flex justify-around">
					<AppButton
						style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg"
						onClick={onConfirmDeleteClick}
						title="Yes"
						nameValue="confirmDelete"
					/>
					<AppButton
						style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg"
						onClick={onCanselDelete}
						title="No"
						nameValue="canselDelete"
					/>
				</span>
			</div>
			;
		</ModalContainer>
	);
};
