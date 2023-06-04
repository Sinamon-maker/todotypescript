import React from 'react';
import { useAuth } from '../../../Context/useAuth';

import { Data } from '../../../globalTypes';
import { Container } from '../../../Module/Container/Container';
import { CatalogueItem } from '../CatalogueItem/CatalogurItem';

import useChangeFolderStore from '../../../store/folderStore';
import useChangeCatalogueStore from '../../../store/catalogueStore';

type Props = {
	documents: Data[];
};

export const CatalogueList = ({ documents }: Props) => {
	const { logoName } = useAuth();

	const currentFolder = useChangeFolderStore((s) => s.currentFolder);
	const searchCatalogueQuery = useChangeCatalogueStore((s) => s.searchCatalogueQuery);

	const searchDocuments = (val: string, docums: Data[]) => docums.filter((it) => it.title.includes(val));

	const renderedCatalogues = (docs: Data[], searchQuery: string) => {
		if (!currentFolder || currentFolder === 'all') {
			return searchDocuments(searchQuery, docs);
		}
		return searchDocuments(
			searchQuery,
			docs.filter((it) => it.folder === currentFolder)
		);
	};

	if (documents.length === 0 && !currentFolder) return <p>Here should be your list of catalogues</p>;

	return (
		<div className="pt-2  ssm:pt-4 grow overflow-y-auto scroll-smooth">
			{!renderedCatalogues.length ? (
				<div className="m-4 text-skin-base">There is not any Catalogue yet, Just start creating.</div>
			) : (
				<Container>
					<div className="w-full flex  flex-col gap-4 ">
						{renderedCatalogues(documents, searchCatalogueQuery)?.map((docum) => (
							<CatalogueItem key={docum.id} docum={docum} logoName={logoName} />
						))}
					</div>
				</Container>
			)}
		</div>
	);
};
