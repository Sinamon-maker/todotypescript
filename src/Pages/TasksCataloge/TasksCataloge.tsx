import React from 'react';

import { NewCatalogeForm } from '../../Components/NewCatalogeForm/NewCatalogeForm';
import { CatalogeList } from '../../Components/CatalogeList/CatalogeList';

export const TasksCataloge = () => {
	return (
		<div className="w-full flex flex-col ">
			<NewCatalogeForm />
			<CatalogeList />
		</div>
	);
};
