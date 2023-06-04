import React from 'react';
import useChangeCatalogueStore from '../../../store/catalogueStore';
import { SearchComponent } from '../../../Module/SearchComponent/SearchComponent';
import { Container } from '../../../Module/Container/Container';

export const CatalogueSearch = () => {
	const setSearchCatalogueQuery = useChangeCatalogueStore((s) => s.setSearchCatalogueQuery);
	const searchCatalogueQuery = useChangeCatalogueStore((s) => s.searchCatalogueQuery);

	const change = (val: string) => {
		console.log(val);
		setSearchCatalogueQuery(val);
	};
	return (
		<Container>
			<SearchComponent searchName="search catalogue" searchQuery={searchCatalogueQuery} change={change} />
		</Container>
	);
};
