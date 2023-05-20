import { create } from 'zustand';
import { Folder } from '../globalTypes';

export interface CatalogueChangeQuery {
	newFolder: Partial<Folder> | null;
	idFolderDelete: number;
	idFolderRename: number;
	idCatalogueDel: string;
	setFolderDel: (id: number) => void;
	setFolderRename: (id: number) => void;
	setNewFolder: (folder: Partial<Folder> | null) => void;
	setIdCatalogueDel: (id: string) => void;
}

const useChangeCatalogueStore = create<CatalogueChangeQuery>((set) => ({
	newFolder: null,
	idFolderDelete: 0,
	idFolderRename: 0,
	idCatalogueDel: '',
	setFolderDel: (id) => set(() => ({ idFolderDelete: id })),
	setFolderRename: (id) => set(() => ({ idFolderRename: id })),
	setNewFolder: (folder) => set(() => ({ newFolder: folder })),
	setIdCatalogueDel: (id) => set(() => ({ idCatalogueDel: id })),
}));

export default useChangeCatalogueStore;
