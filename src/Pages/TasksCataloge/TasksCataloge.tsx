import React from 'react';

import useGetCollectction from '../../Hooks/getCollection';
import { Data } from '../../globalTypes';
import { Loader } from '../../Components/Loader/loader';
import { ErrorMessage } from '../../Components/ErrorMessage/ErrorMessage';

import { CatalogueList } from '../../Components/Cataloge/CatalogeList/CatalogeList';

export const TasksCataloge = () => {
	const { documents, error, isPending } = useGetCollectction<Data>('tasks');
	if (isPending) return <Loader />;
	return (
		<div className="w-full h-full flex flex-col gap-2 ">
			{error && <ErrorMessage message={error} />}

			<CatalogueList documents={documents} />
		</div>
	);
};
