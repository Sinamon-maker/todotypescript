import React, { useContext } from 'react';

import { NewCatalogeForm } from '../../Components/Cataloge/NewCatalogeForm/NewCatalogeForm';
import { CatalogeList } from '../../Components/Cataloge/CatalogeList/CatalogeList';
import { UserContext } from '../../Context/userContext';
import useGetCollectction from '../../Hooks/getCollection';
import { Data } from '../../globalTypes';
import { Loader } from '../../Components/Loader/loader';
import { Error } from '../../Components/Error/error';
import { useParams } from 'react-router-dom';

export const MyTasksCataloge = () => {
	const { userId } = useParams();
	const { documents, error, isPending } = useGetCollectction<Data>('tasks', userId);
	if (isPending) return <Loader />;

	return (
		<div className="w-full h-full flex flex-col gap-2 ">
			{error && <Error message={error} />}
			<NewCatalogeForm />
			{!documents.length && <div className="m-4 text-skin-base">There is not any Catalogue yet, Just start creating.</div>}
			{documents.length !== 0 && <CatalogeList documents={documents} />}
		</div>
	);
};
