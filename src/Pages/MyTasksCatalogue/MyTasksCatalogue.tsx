import React from 'react';

import { NewCatalogeForm } from '../../Components/Cataloge/NewCatalogeForm/NewCatalogeForm';
import { CatalogeList } from '../../Components/Cataloge/CatalogeList/CatalogeList';
import useGetCollection from '../../Hooks/getCollection';
import { Data, Folder, Folders, UsersCollection } from '../../globalTypes';
import { Loader } from '../../Components/Loader/loader';
import { Error } from '../../Components/Error/error';
import { useParams } from 'react-router-dom';
import { SideBar } from '../../Components/Cataloge/SideBar/SideBar';

export const MyTasksCataloge = () => {
	const { userId } = useParams();
	console.log('userId', userId);
	const { documents, error, isPending } = useGetCollection<Data>('tasks', userId);

	const { documents: folders, error: err, isPending: isPen } = useGetCollection<Folder>('folders', userId);
	if (!userId) return <p>Sth wrong</p>;
	if (isPending) return <Loader />;
	return (
		<div className="w-full h-full  flex  gap-2 ">
			<SideBar folders={folders} />
			<div className="flex flex-col grow gap-2">
				<NewCatalogeForm />

				{!documents.length && <div className="m-4 text-skin-base">There is not any Catalogue yet, Just start creating.</div>}
				{documents.length !== 0 && <CatalogeList documents={documents} />}
			</div>
		</div>
	);
};
