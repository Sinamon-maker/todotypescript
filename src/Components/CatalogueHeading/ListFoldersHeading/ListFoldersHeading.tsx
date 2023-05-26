import React, { Dispatch, SetStateAction } from 'react';

import { Listbox, Menu } from '@headlessui/react';
import { Folder, Search } from '../../../globalTypes';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
type Props = {
	currentFolderId: string;
	changeFolder: (val: string) => void;
	folders: Folder[];
};

export const ListFoldersHeading = ({ changeFolder, currentFolderId, folders }: Props) => {
	const currentFolder = folders.find((it) => it.id === currentFolderId)?.name ?? 'all';
	return (
		<Listbox value={currentFolder} onChange={changeFolder}>
			<Listbox.Button>{currentFolder}</Listbox.Button>
			<Listbox.Options>
				{folders.map((folder) => (
					<Listbox.Option key={folder.id} value={folder.id}>
						{folder.name}
					</Listbox.Option>
				))}
			</Listbox.Options>
		</Listbox>
	);
};
