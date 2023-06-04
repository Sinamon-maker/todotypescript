import React from 'react';
import { Data } from '../../../globalTypes';
import { CatalogueList } from '../CatalogeList/CatalogeList';
import { NewCatalogeForm } from '../NewCatalogeForm/NewCatalogeForm';

import { CatalogueContainer } from '../CatalogueContainer/CatalogueContainer';
import { CatalogueSearch } from '../CatalogueSearch/CatalogueSearch';

type Props = {
	documents: Data[];
};

export const Catalogues = ({ documents }: Props) => (
	<CatalogueContainer>
		<NewCatalogeForm />
		<CatalogueSearch />
		<CatalogueList documents={documents} />
	</CatalogueContainer>
);
