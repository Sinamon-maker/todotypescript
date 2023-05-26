import React from 'react';

import { useParams, useSearchParams } from 'react-router-dom';

import { CatalogeHeadingMenu } from '../../Components/CatalogueHeading/CatalogeHeadingMenu/CatalogeHeadingMenu';
import { Loader } from '../../Components/Loader/Loader';
import { Data, Folder, serverDataTask, Search } from '../../globalTypes';
import useGetCollection from '../../Hooks/getCollection';
import TasksPage from '../TaskPage/TasksPage';

export const HomeTasksPage = () => {
	const { userId } = useParams();
	let [searchParams, setSearchParams] = useSearchParams();
	const currentParams = Object.fromEntries([...searchParams]) as Search;
	console.log('searchParams', currentParams);
	const { documents, error, isPending } = useGetCollection<Data>('tasks', userId);

	const { documents: folders, error: err, isPending: isPen } = useGetCollection<Folder>('folders');

	const changeParams = (data: Search) => {
		setSearchParams(data);
	};

	if (!userId) return <p>Sth wrong</p>;
	if (isPending || isPen) return <Loader />;

	return (
		<div>
			<CatalogeHeadingMenu currentParams={currentParams} changeParams={changeParams} documents={documents} folders={folders} />
			<TasksPage currentParams={currentParams} />
		</div>
	);
};
