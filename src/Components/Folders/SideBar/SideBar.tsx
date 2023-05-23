import React from 'react';

import { Folder } from '../../../globalTypes';

import { NewFolderForm } from '../NewFolderForm/NewFolderForm';
import { FoldersList } from '../FoldersList/FoldersList';
import { FolderContainer } from '../FolderContainer/FolderContainer';

type Props = {
	folders: Folder[];
};

export const SideBar = ({ folders }: Props) => {
	return (
		<FolderContainer folders={folders}>
			<FoldersList folders={folders} />
			<NewFolderForm folders={folders} />
		</FolderContainer>
	);
};
