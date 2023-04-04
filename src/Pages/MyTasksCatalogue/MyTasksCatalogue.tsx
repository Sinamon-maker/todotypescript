import React, { useContext } from 'react';

import { NewCatalogeForm } from '../../Components/Cataloge/NewCatalogeForm/NewCatalogeForm';
import { CatalogeList } from '../../Components/Cataloge/CatalogeList/CatalogeList';
import { UserContext } from '../../Context/userContext';
import useGetCollectction from '../../Hooks/getCollection';
import { Data } from '../../globalTypes';

export const MyTasksCataloge = () => {
	const { logoName } = useContext(UserContext);

	const { documents, error, isPending } = useGetCollectction<Data>('tasks', logoName?.uid);
	if (isPending) return <div>Loading...</div>;

	return (
		<div className="w-full flex flex-col ">
			<NewCatalogeForm />
			{!documents.length && <div className="m-4 text-skin-base">There is not any Catalogue yet, Just start creating.</div>}
			{documents.length !== 0 && <CatalogeList documents={documents} />}
		</div>
	);
};
