import React from 'react';
import { useAuth } from '../../../Context/useAuth';

import { Data } from '../../../globalTypes';
import { Container } from '../../../Module/Container/Container';
import { CatalogueItem } from '../CatalogueItem/CatalogurItem';
import { NewCatalogeForm } from '../NewCatalogeForm/NewCatalogeForm';

import useChangeFolderStore from '../../../store/folderStore';
import { CatalogueContainer } from '../CatalogueContainer/CatalogueContainer';

type Props = {
	documents: Data[];
};

export const CatalogeList = ({ documents }: Props) => {
	const { logoName } = useAuth();

	const currentFolder = useChangeFolderStore((s) => s.currentFolder);

	const renderedCatalogues = (documents: Data[]) => {
		if (currentFolder === null || currentFolder.id === 'all') {
			return documents;
		}
		return documents.filter((it) => it.folder === currentFolder.id);
	};

	if (documents.length === 0 && !currentFolder) return <p>Here should be your list of catalogues</p>;

	return (
		<CatalogueContainer documents={documents}>
			{currentFolder ? <NewCatalogeForm /> : <p>Choose Folder</p>}

			<div className=" grow overflow-y-auto scroll-smooth">
				{!renderedCatalogues.length ? (
					<div className="m-4 text-skin-base">There is not any Catalogue yet, Just start creating.</div>
				) : (
					<Container>
						<div className="w-full flex  flex-col gap-4 ">
							{renderedCatalogues(documents)?.map((docum) => (
								<CatalogueItem key={docum.id} docum={docum} logoName={logoName} />
							))}
						</div>
					</Container>
				)}
			</div>
		</CatalogueContainer>
	);
};
