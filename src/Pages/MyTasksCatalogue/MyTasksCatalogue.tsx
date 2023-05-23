import React from 'react';

import useGetCollection from '../../Hooks/getCollection';
import { Data, Folder } from '../../globalTypes';
import { Loader } from '../../Components/Loader/loader';

import { useParams } from 'react-router-dom';
import { SideBar } from '../../Components/Folders/SideBar/SideBar';
import { Catalogues } from '../../Components/Cataloge/Catalogues/Catalogues';

export const MyTasksCataloge = () => {
	const { userId } = useParams();

	const { documents, error, isPending } = useGetCollection<Data>('tasks', userId);

	const { documents: folders, error: err, isPending: isPen } = useGetCollection<Folder>('folders');
	console.log('foldersLength', folders.length);
	if (!userId) return <p>Sth wrong</p>;
	if (isPending) return <Loader />;
	return (
		<div className="w-full h-full  flex  gap-2 relative">
			<SideBar folders={folders} />
			{folders.length !== 0 && <Catalogues documents={documents} />}
		</div>
	);
};
