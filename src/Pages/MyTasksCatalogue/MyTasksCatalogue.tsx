import React, { useContext } from 'react';

import { NewCatalogeForm } from '../../Components/Cataloge/NewCatalogeForm/NewCatalogeForm';
import { CatalogeList } from '../../Components/Cataloge/CatalogeList/CatalogeList';
import { UserContext } from '../../Context/userContext';
import useGetCollectction from '../../Hooks/getCollection';
import { Data } from '../../globalTypes';
import { Loader } from '../../Components/Loader/loader';

export const MyTasksCataloge = () => {
	const { logoName } = useContext(UserContext);

	const { documents, error, isPending } = useGetCollectction<Data>('tasks', logoName?.uid);
	if (isPending) return <Loader />;

	return (
		<div className="w-full h-full flex flex-col gap-2 ">
			<NewCatalogeForm />
			{!documents.length && <div className="m-4 text-skin-base">There is not any Catalogue yet, Just start creating.</div>}
			{documents.length !== 0 && <CatalogeList documents={documents} />}
		</div>
	);
};
