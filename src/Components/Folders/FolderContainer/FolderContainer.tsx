import React, { ReactNode, useCallback, useEffect, useState } from 'react';

import { Folder } from '../../../globalTypes';
import useChangeFolderStore from '../../../store/folderStore';

import { AppButton } from '../../../Module/Button/Button';

type Props = {
	folders: Folder[];
	children: ReactNode;
};

export const FolderContainer = ({ folders, children }: Props) => {
	const [isOpenSidebar, setOpenSideBar] = useState(false);

	const setCurrentFolder = useChangeFolderStore((s) => s.setCurrentFolder);
	const currentFolder = useChangeFolderStore((s) => s.currentFolder);

	const initializeCurrentFolder = useCallback(() => {
		if (!currentFolder) {
			if (folders.length > 1) {
				setCurrentFolder('all');
				return;
			}
			if (folders.length === 1) {
				console.log('initialize current folder', folders, folders[0].id);
				setCurrentFolder(folders[0].id);
			}
		}
	}, [setCurrentFolder, folders, currentFolder]);

	useEffect(() => {
		initializeCurrentFolder();
	}, [initializeCurrentFolder]);

	const closeStyle = 'w-0 static';
	const openStyle = 'absolute inset-y-0 w-3/4 z-40';
	const stylenormal =
		'p-4 sm:relative  ssm:w-1/3 h-full bg-violet-900 ssm:bg-transparent sm:border sm:border-fill-weak flex flex-col rounded  overflow-hidden   text-skin-base  transition-all';
	const togglePart = isOpenSidebar ? openStyle : closeStyle;

	const styleSideBar = togglePart + stylenormal;

	return (
		<aside className={`${styleSideBar}`}>
			<AppButton
				style={!isOpenSidebar ? 'absolute p-2 ssm:hidden top-4' : 'absolute p-2 ssm:hidden top-4 right-0.5'}
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
	);
};
