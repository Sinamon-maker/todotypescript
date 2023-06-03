import React from 'react';

import { useParams, useSearchParams } from 'react-router-dom';

import { CatalogeHeadingMenu } from '../../Components/CatalogueHeading/CatalogeHeadingMenu/CatalogeHeadingMenu';
import { Loader } from '../../Components/Loader/Loader';
import { Data, Folder, Search } from '../../globalTypes';
import useGetCollection from '../../Hooks/getCollection';
import { TasksPage } from '../TaskPage/TasksPage';

export const HomeTasksPage = () => {
	const { userId } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const currentParams = Object.fromEntries([...searchParams]) as Search;

	const { documents, error, isPending } = useGetCollection<Data>('tasks', userId);

	const { documents: folders, error: err, isPending: isPen } = useGetCollection<Folder>('folders', userId);

	const changeParams = (data: Search) => {
		setSearchParams(data);
	};

	if (!userId) return <p>Sth wrong</p>;
	if (err) return <p>{err}</p>;
	if (err) return <p>{error}</p>;
	if (isPending || isPen) return <Loader />;

	return (
		<div>
			<CatalogeHeadingMenu currentParams={currentParams} changeParams={changeParams} documents={documents} folders={folders} />
			{currentParams.ctlg && <TasksPage currentParams={currentParams} />}
		</div>
	);
};
