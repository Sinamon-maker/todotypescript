import React from 'react';

import { NewCatalogeForm } from '../../Components/Cataloge/NewCatalogeForm/NewCatalogeForm';
import { CatalogeList } from '../../Components/Cataloge/CatalogeList/CatalogeList';
import useGetCollectction from '../../Hooks/getCollection';
import { Data } from '../../globalTypes';
import { Loader } from '../../Components/Loader/loader';

export const TasksCataloge = () => {
	const { documents, error, isPending } = useGetCollectction<Data>('tasks');
	if (isPending) return <Loader />;
	return (
		<div className="w-full h-full flex flex-col gap-2 ">
			<NewCatalogeForm />
			<CatalogeList documents={documents} />
		</div>
	);
};
