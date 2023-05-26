import React from 'react';
import { ListCataloguesHeading } from '../ListCataloduesHeading/ListCataloguesHeading';
import { Data, Folder } from '../../../globalTypes';
import { AppButton } from '../../../Module/Button/Apbutton';
import { Container } from '../../../Module/Container/Container';
import { styleType } from '../../../styles/styles';

type Props = {
	documents: Data[];
	folders: Folder[];
};
export const CatalogeHeadingMenu = ({ documents, folders }: Props) => {
	const delCatalodue = () => {
		console.log('del catalogue');
	};

	return (
		<Container>
			<div className="w-full flex justify-between my-2 text-skin-base justify-between items-center">
				<ul className="flex items-center gap-4">
					<li className="">
						<ListCataloguesHeading catalogues={documents} />
					</li>
					<li className="">Documents</li>
				</ul>

				<AppButton style={styleType.buttonStyle} nameValue="deleteCataloge" title="Delete cataloge" onClick={delCatalodue} />
			</div>
		</Container>
	);
};
