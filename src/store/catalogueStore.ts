import { create } from 'zustand';

export interface CatalogueChangeQuery {
	idCatalogueDel: string;
	searchCatalogueQuery: string;
	setIdCatalogueDel: (id: string) => void;
	setSearchCatalogueQuery: (val: string) => void;
}

const useChangeCatalogueStore = create<CatalogueChangeQuery>((set) => ({
	idCatalogueDel: '',
	searchCatalogueQuery: '',
	setIdCatalogueDel: (id) => set(() => ({ idCatalogueDel: id })),
	setSearchCatalogueQuery: (val) => set(() => ({ searchCatalogueQuery: val })),
}));

export default useChangeCatalogueStore;
