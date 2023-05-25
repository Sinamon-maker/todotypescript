import { create } from 'zustand';

export const folderAll = { id: 'all', name: 'all', createdAt: 1, userId: '' };

export interface FolderChangeQuery {
	currentFolder: string;

	idFolderDelete: number;
	idFolderRename: number;

	setCurrentFolder: (folder: string) => void;
	setFolderDel: (id: number) => void;
	setFolderRename: (id: number) => void;
}

const useChangeFolderStore = create<FolderChangeQuery>((set) => ({
	currentFolder: '',
	idFolderDelete: 0,
	idFolderRename: 0,
	setCurrentFolder: (folder) => set(() => ({ currentFolder: folder })),
	setFolderDel: (id) => set(() => ({ idFolderDelete: id })),
	setFolderRename: (id) => set(() => ({ idFolderRename: id })),
}));

export default useChangeFolderStore;
