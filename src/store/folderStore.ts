import { create } from 'zustand';
import { Folder } from '../globalTypes';

export const folderAll = { id: 'all', name: 'all', createdAt: 1, userId: '' };

export interface FolderChangeQuery {
	currentFolder: Folder | null;
	newFolder: string;
	idFolderDelete: number;
	idFolderRename: number;
	setCurrentFolder: (folder: Folder | null) => void;
	setFolderDel: (id: number) => void;
	setFolderRename: (id: number) => void;
	setNewFolder: (folder: string) => void;
}

const useChangeFolderStore = create<FolderChangeQuery>((set) => ({
	currentFolder: null,
	newFolder: '',
	idFolderDelete: 0,
	idFolderRename: 0,
	setCurrentFolder: (folder) => set(() => ({ currentFolder: folder })),
	setFolderDel: (id) => set(() => ({ idFolderDelete: id })),
	setFolderRename: (id) => set(() => ({ idFolderRename: id })),
	setNewFolder: (folder) => set(() => ({ newFolder: folder })),
}));

export default useChangeFolderStore;
