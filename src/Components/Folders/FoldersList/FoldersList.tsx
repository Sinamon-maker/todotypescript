import React from 'react';

import { Folder } from '../../../globalTypes';

import { EditFolders } from '../EditFolders/EditFolders';
import useChangeFolderStore, { folderAll } from '../../../store/folderStore';

import { FolderItem } from '../FolderItem/FolderItem';
import { SearchFolder } from '../SearchFolder/SearchFolder';

type Props = {
	folders: Folder[];
};

export const FoldersList = ({ folders }: Props) => {
	const searchQueryFolder = useChangeFolderStore((s) => s.searchQueryFolder);

	const filteredFolders = searchQueryFolder ? folders.filter((it) => it.name.includes(searchQueryFolder)) : folders;

	return (
		<>
			<h2 className=" text-lg ssm:text-xl mt-4 sm:mt-6 underline underline-offset-4">Folders</h2>
			<div className=" flex items-center mt-2">
				<SearchFolder />
				<EditFolders />
			</div>
			<div className="pl-2 sm:pl-4 grow overflow-auto">
				{folders.length !== 0 && (
					<ul className=" mt-4">
						{folders.length > 1 && <FolderItem folderItem={folderAll} />}
						{filteredFolders.map((it) => (
							<FolderItem key={it.id} folderItem={it} />
						))}
					</ul>
				)}
				{folders.length === 0 && <p>No folders yet. Start creating</p>}
			</div>
		</>
	);
};
