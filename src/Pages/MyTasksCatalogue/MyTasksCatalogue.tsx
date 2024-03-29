import React from 'react';
import { useParams } from 'react-router-dom';
import useGetCollection from '../../Hooks/getCollection';
import { Data, Folder } from '../../globalTypes';
import { Loader } from '../../Components/Loader/Loader';

import { SideBar } from '../../Components/Folders/SideBar/SideBar';
import { Catalogues } from '../../Components/Cataloge/Catalogues/Catalogues';
import { MyCataloguePageContainer } from '../../Components/MyCataloguesPageContainer/MyCataloguePageContainer';

export const MyTasksCataloge = () => {
	const { userId } = useParams();

	const { documents, error, isPending } = useGetCollection<Data>('tasks', userId);

	const { documents: folders, error: err, isPending: isPen } = useGetCollection<Folder>('folders', userId);

	if (!userId) return <p>Sth wrong</p>;
	if (isPending || isPen) return <Loader />;
	if (err) return <p>{err}</p>;
	if (err) return <p>{error}</p>;
	return (
		<MyCataloguePageContainer folders={folders} documents={documents}>
			<SideBar folders={folders} />
			{folders.length !== 0 && <Catalogues documents={documents} />}
		</MyCataloguePageContainer>
	);
};
