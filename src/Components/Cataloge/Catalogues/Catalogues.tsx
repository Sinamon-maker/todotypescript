import React from 'react';
import { useAuth } from '../../../Context/useAuth';

import { Data } from '../../../globalTypes';
import { Container } from '../../../Module/Container/Container';
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
