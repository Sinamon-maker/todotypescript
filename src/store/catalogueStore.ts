import { create } from 'zustand';

export interface CatalogueChangeQuery {
	idCatalogueDel: string;
	setIdCatalogueDel: (id: string) => void;
}

const useChangeCatalogueStore = create<CatalogueChangeQuery>((set) => ({
	idCatalogueDel: '',
	setIdCatalogueDel: (id) => set(() => ({ idCatalogueDel: id })),
}));

export default useChangeCatalogueStore;
