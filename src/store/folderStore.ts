import { create } from 'zustand';

export const folderAll = { id: 'all', name: 'all', createdAt: 1, userId: '' };

export interface FolderChangeQuery {
	currentFolder: string;
	searchQueryFolder: string;
	idFolderDelete: string;
	idFolderRename: string;

	setCurrentFolder: (folder: string) => void;
	setFolderDel: (id: string) => void;
	setFolderRename: (id: string) => void;
	setSearchQueryFolder: (val: string) => void;
}

const useChangeFolderStore = create<FolderChangeQuery>((set) => ({
	currentFolder: '',
	idFolderDelete: '',
	idFolderRename: '',
	searchQueryFolder: '',
	setCurrentFolder: (folder) => set(() => ({ currentFolder: folder })),
	setFolderDel: (id) => set(() => ({ idFolderDelete: id })),
	setFolderRename: (id) => set(() => ({ idFolderRename: id })),
	setSearchQueryFolder: (val) => set(() => ({ searchQueryFolder: val })),
}));

export default useChangeFolderStore;
