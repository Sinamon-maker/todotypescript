import React, { useContext } from 'react';
import { useAuth } from '../../../Context/useAuth';
import { UserContext } from '../../../Context/userContext';
import { Data } from '../../../globalTypes';
import { Container } from '../../../Module/Container/Container';
import { CatalogueItem } from '../CatalogueItem/CatalogurItem';
import { NewCatalogeForm } from '../NewCatalogeForm/NewCatalogeForm';
import useChangeCatalogueStore from '../../../store/catalogueStore';
import useChangeFolderStore from '../../../store/folderStore';

type Props = {
	documents: Data[];
};

export const CatalogeList = ({ documents }: Props) => {
	const { logoName } = useAuth();

	const currentFolder = useChangeFolderStore((s) => s.currentFolder);

	const renderedCatalogues = currentFolder !== null ? documents.filter((it) => it.folder === currentFolder.id) : documents;
	console.log('documents', documents);
	if (documents.length === 0 && !currentFolder) return <p>Here should be your list of catalogues</p>;

	return (
		<div className="flex flex-col grow gap-2">
			{currentFolder ? <NewCatalogeForm /> : <p>Choose Folder</p>}

			<div className=" grow overflow-y-auto scroll-smooth">
				{!renderedCatalogues.length ? (
					<div className="m-4 text-skin-base">There is not any Catalogue yet, Just start creating.</div>
				) : (
					<Container>
						<div className="w-full flex  flex-col gap-4 ">
							{renderedCatalogues?.map((docum) => (
								<CatalogueItem key={docum.id} docum={docum} logoName={logoName} />
							))}
						</div>
					</Container>
				)}
			</div>
		</div>
	);
};
