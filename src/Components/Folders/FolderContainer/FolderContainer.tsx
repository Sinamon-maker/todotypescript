import React, { ReactNode, useEffect, useState } from 'react';

import { Folder } from '../../../globalTypes';
import useChangeFolderStore, { folderAll } from '../../../store/folderStore';

import useCollection from '../../../Hooks/useCollection';
import { serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../../../Context/useAuth';
import { AppButton } from '../../../Module/Button/Button';

type Props = {
	folders: Folder[];
	children: ReactNode;
};

export const FolderContainer = ({ folders, children }: Props) => {
	const [isOpenSidebar, setOpenSideBar] = useState(false);

	const setCurrentFolder = useChangeFolderStore((s) => s.setCurrentFolder);

	const { logoName } = useAuth();
	const idFolderRename = useChangeFolderStore((s) => s.idFolderRename);
	const setFolderRename = useChangeFolderStore((s) => s.setFolderRename);
	const idFolderDelete = useChangeFolderStore((s) => s.idFolderDelete);
	const setFolderDel = useChangeFolderStore((s) => s.setFolderDel);
	const newFolder = useChangeFolderStore((s) => s.newFolder);
	const setNewFolder = useChangeFolderStore((s) => s.setNewFolder);

	const { error, addDocument } = useCollection('folders');

	useEffect(() => {
		if (newFolder) {
			createNewFolder(newFolder);
		}
	}, [newFolder]);

	const createNewFolder = async (folder: string) => {
		const newFolder = { name: folder, userId: logoName?.uid, createdAt: serverTimestamp() };
		console.log('newFolder');
		try {
			await addDocument(newFolder);
		} catch (err) {
			console.log('err adding folder', err);
		}
	};

	useEffect(() => {
		if (folders.length > 1) {
			setCurrentFolder(folderAll);
		}
	}, []);

	const closeStyle = 'w-0 static';
	const openStyle = 'absolute inset-y-0 w-3/4 z-40';
	const stylenormal =
		'p-4 sm:relative  ssm:w-1/3 h-full bg-violet-900 ssm:bg-transparent sm:border sm:border-fill-weak flex flex-col rounded  overflow-hidden   text-skin-base  transition-all';
	const togglePart = isOpenSidebar ? openStyle : closeStyle;

	const styleSideBar = togglePart + stylenormal;

	return (
		<>
			<aside className={`${styleSideBar}`}>
				<AppButton
					style={!isOpenSidebar ? 'absolute p-2 ssm:hidden' : 'absolute p-2 ssm:hidden right-0.5'}
					ariaLabel=""
					type="button"
					iconStyle=""
					nameValue="menu"
					title=""
					onClick={() => setOpenSideBar(!isOpenSidebar)}
					Icon={!isOpenSidebar ? 'menu' : 'close'}
				/>
				{children}
			</aside>
		</>
	);
};
