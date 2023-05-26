import React, { useState } from 'react';
import { ListCataloguesHeading } from '../ListCataloduesHeading/ListCataloguesHeading';
import { Data, Folder, Search } from '../../../globalTypes';
import { AppButton } from '../../../Module/Button/Apbutton';
import { Container } from '../../../Module/Container/Container';
import { styleType } from '../../../styles/styles';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import { ListFoldersHeading } from '../ListFoldersHeading/ListFoldersHeading';

type Props = {
	documents: Data[];
	folders: Folder[];
	currentParams: Search;
	changeParams: (val: Search | {}) => void;
};

const fakeCatalogue = { title: 'choose', id: 'id', userId: '444', folder: 'all', tasks: [], displayName: '', createdAt: 9888 };
export const CatalogeHeadingMenu = ({ currentParams, changeParams, documents, folders }: Props) => {
	const navigate = useNavigate();
	const { userId } = useParams();
	const catalogueId = currentParams.ctlg;

	const initialTask = (docs: Data[], id: string) => {
		if (id) {
			const folder = docs.find((it) => it.id === id);
			if (folder) return folder;
		}
		return fakeCatalogue;
	};

	const [currentFolderId, setCurrentFolderId] = useState(initialTask(documents, catalogueId).folder);

	const [selectedCatalogue, setSelectedCatalogue] = useState(initialTask(documents, catalogueId));
	const delCatalodue = () => {
		console.log('del catalogue');
	};

	const renderTasks = (data: Data) => {
		setSelectedCatalogue(data);

		navigate({
			pathname: `/catalogue/${userId}/tasks`,
			search: createSearchParams({
				ctlg: data.id,
			}).toString(),
		});
	};

	const changeFolder = (folder: string) => {
		setCurrentFolderId(folder);
		setSelectedCatalogue(fakeCatalogue);
		changeParams({});
	};

	return (
		<Container>
			<div className="w-full flex justify-between my-2 text-skin-base justify-between items-center">
				<ul className="flex items-center gap-4">
					<li className="">
						<ListFoldersHeading folders={folders} currentFolderId={currentFolderId} changeFolder={changeFolder} />
					</li>
					<li className="">
						<ListCataloguesHeading renderTasks={renderTasks} selectedCatalogue={selectedCatalogue} catalogues={documents} currentFolderId={currentFolderId} />
					</li>
				</ul>

				<AppButton style={styleType.buttonStyle} nameValue="deleteCataloge" title="Delete cataloge" onClick={delCatalodue} />
			</div>
		</Container>
	);
};
