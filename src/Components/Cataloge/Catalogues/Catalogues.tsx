import React from 'react';
import { Data } from '../../../globalTypes';
import { CatalogueList } from '../CatalogeList/CatalogeList';
import { NewCatalogeForm } from '../NewCatalogeForm/NewCatalogeForm';

import { CatalogueContainer } from '../CatalogueContainer/CatalogueContainer';

type Props = {
	documents: Data[];
};

export const Catalogues = ({ documents }: Props) => {
	return (
		<CatalogueContainer documents={documents}>
			<NewCatalogeForm />

			<CatalogueList documents={documents} />
		</CatalogueContainer>
	);
};
