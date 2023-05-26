import React from 'react';

import { Outlet, useParams } from 'react-router-dom';

import { useGetDocument } from '../../api/useGetDocument';

import { CatalogeHeadingMenu } from '../../Components/CatalogueHeading/CatalogeHeadingMenu/CatalogeHeadingMenu';
import { Loader } from '../../Components/Loader/Loader';
import { Data, Folder, serverDataTask } from '../../globalTypes';
import useGetCollection from '../../Hooks/getCollection';

export const HomeTasksPage = () => {
	const { userId } = useParams();
	const { documents, error, isPending } = useGetCollection<Data>('tasks', userId);

	const { documents: folders, error: err, isPending: isPen } = useGetCollection<Folder>('folders');
	console.log('foldersLength', folders.length);
	if (!userId) return <p>Sth wrong</p>;
	if (isPending || isPen) return <Loader />;

	return (
		<div>
			<CatalogeHeadingMenu documents={documents} folders={folders} />
			<Outlet />
		</div>
	);
};
