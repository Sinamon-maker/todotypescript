import React from 'react';

import useChangeFolderStore from '../../../store/folderStore';
import { SearchComponent } from '../../../Module/SearchComponent/SearchComponent';

export const SearchFolder = () => {
	const searchQueryFolder = useChangeFolderStore((s) => s.searchQueryFolder);
	const setSearchQueryFolder = useChangeFolderStore((s) => s.setSearchQueryFolder);

	const change = (val: string) => {
		setSearchQueryFolder(val);
	};

	return <SearchComponent change={change} searchName="search folder" searchQuery={searchQueryFolder} />;
};
