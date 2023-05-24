import React, { useEffect } from 'react';

import { Folder } from '../../../globalTypes';
import useChangeFolderStore, { folderAll } from '../../../store/folderStore';

import { FolderItem } from '../FolderItem/FolderItem';

type Props = {
	folders: Folder[];
};

export const FoldersList = ({ folders }: Props) => {
	const setCurrentFolder = useChangeFolderStore((s) => s.setCurrentFolder);

	const initializeCurrentFolder = () => {
		if (folders.length > 1) {
			setCurrentFolder(folderAll);
		}
	};

	useEffect(() => {
		initializeCurrentFolder();
	}, []);

	return (
		<div className="p-8 ssm:pl-10 grow">
			<h2 className="text-lg ssm:text-xl my-6 underline underline-offset-4">Folders</h2>

			{folders.length !== 0 && (
				<>
					{folders.length > 1 && <FolderItem folderItem={folderAll} />}
					<ul className=" my-4">
						{folders.map((it) => (
							<FolderItem key={it.id} folderItem={it} />
						))}
					</ul>
				</>
			)}
			{folders.length === 0 && <p>No folders yet. Start creating</p>}
		</div>
	);
};
