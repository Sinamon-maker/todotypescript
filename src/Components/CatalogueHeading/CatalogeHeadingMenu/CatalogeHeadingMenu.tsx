import React, { useState } from 'react';
import { createSearchParams, Link, useNavigate, useParams } from 'react-router-dom';
import { ListCataloguesHeading } from '../ListCataloduesHeading/ListCataloguesHeading';
import { Data, Folder, Search } from '../../../globalTypes';
import { Container } from '../../../Module/Container/Container';
import { ListFoldersHeading } from '../ListFoldersHeading/ListFoldersHeading';
import { folderAll } from '../../../store/folderStore';

type Props = {
	documents: Data[];
	folders: Folder[];
	currentParams: Search;
	changeParams: (val: Search | Record<string, never>) => void;
};

const fakeCatalogue = { title: 'choose', id: 'id', userId: '444', folder: 'all', tasks: [], displayName: '', createdAt: 9888 };

export const CatalogeHeadingMenu = ({ currentParams, changeParams, documents, folders }: Props) => {
	const navigate = useNavigate();
	const { userId } = useParams();
	const catalogueId = currentParams.ctlg;

	const initialization = () => {
		let fold;
		let catal;
		if (!catalogueId) {
			if (folders.length === 1) {
				fold = folders[0];
			} else {
				fold = folderAll;
			}
			catal = fakeCatalogue;
		} else {
			const currentCatalogue = documents.find((it) => it.id === catalogueId) ?? fakeCatalogue;
			catal = currentCatalogue;
			const newCurrentFolder = folders.find((it) => it.id === currentCatalogue.folder) ?? null;
			fold = newCurrentFolder;
		}
		return { catal, fold };
	};

	const [currentFolder, setCurrentFolder] = useState<Folder | null>(initialization().fold);

	const [selectedCatalogue, setSelectedCatalogue] = useState(initialization().catal);

	const newFolders = folders.length > 1 ? [...folders, folderAll] : folders;

	const renderTasks = (data: Data) => {
		setSelectedCatalogue(data);

		navigate({
			pathname: `/catalogue/${userId}/tasks`,
			search: createSearchParams({
				ctlg: data.id,
			}).toString(),
		});
	};

	const changeFolder = (folder: Folder) => {
		setCurrentFolder(folder);
		if (folders.length > 1) {
			setSelectedCatalogue(fakeCatalogue);
			changeParams({});
		}
	};
	if (currentFolder === null)
		return (
			<p>
				No Folders yet. Create on this page <Link to={`/catalogues/${userId}`}>Here</Link>
			</p>
		);

	return (
		<Container>
			<ul className="w-full flex justify-between my-2 gap-4 text-skin-base justify-around ssm:justify-start items-center">
				<li className="">
					<ListFoldersHeading folders={newFolders} currentFolder={currentFolder} changeFolder={changeFolder} />
				</li>
				<li className="">
					<ListCataloguesHeading renderTasks={renderTasks} selectedCatalogue={selectedCatalogue} catalogues={documents} currentFolder={currentFolder} />
				</li>
			</ul>
		</Container>
	);
};
