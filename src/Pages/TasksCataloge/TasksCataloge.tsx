import React from 'react';

import { NewCatalogeForm } from '../../Components/Cataloge/NewCatalogeForm/NewCatalogeForm';
import { CatalogeList } from '../../Components/Cataloge/CatalogeList/CatalogeList';
import useGetCollectction from '../../Hooks/getCollection';
import { Data } from '../../globalTypes';

export const TasksCataloge = () => {
	const { documents, error, isPending } = useGetCollectction<Data>('tasks');
	if (isPending) return <div>Loading...</div>;
	return (
		<div className="w-full flex flex-col ">
			<NewCatalogeForm />
			<CatalogeList documents={documents} />
		</div>
	);
};
