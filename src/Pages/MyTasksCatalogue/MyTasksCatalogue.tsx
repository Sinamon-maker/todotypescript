import React from 'react';

import { CatalogeList } from '../../Components/Cataloge/CatalogeList/CatalogeList';
import useGetCollection from '../../Hooks/getCollection';
import { Data, Folder, Folders, UsersCollection } from '../../globalTypes';
import { Loader } from '../../Components/Loader/loader';
import { Error } from '../../Components/Error/error';
import { useParams } from 'react-router-dom';
import { SideBar } from '../../Components/Folders/SideBar/SideBar';

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
			{folders.length !== 0 && <CatalogeList documents={documents} />}
		</div>
	);
};
