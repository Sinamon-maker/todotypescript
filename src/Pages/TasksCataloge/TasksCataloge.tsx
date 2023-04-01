import React from 'react';

import { NewCatalogeForm } from '../../Components/Cataloge/NewCatalogeForm/NewCatalogeForm';
import { CatalogeList } from '../../Components/Cataloge/CatalogeList/CatalogeList';

export const TasksCataloge = () => (
	<div className="w-full flex flex-col ">
		<NewCatalogeForm />
		<CatalogeList />
	</div>
);
