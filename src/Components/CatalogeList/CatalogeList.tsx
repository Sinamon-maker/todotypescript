import React from 'react';
import { Link } from 'react-router-dom';
import getCollection from '../../Hooks/getCollection';

export const CatalogeList = () => {
	const { documents, error } = getCollection('tasks');
	//	const loadData = useLoaderData() as Task[] | [];
	console.log('home', documents, error);
	const id = 3;
	return (
		<div className="w-full flex  flex-col gap-4">
			<Link className="w-full grow hover:scale-105 transition-all" to={`/tasks/${id}`}>
				<div className="w-full  p-4 rounded-lg border flex gap-4 items-center text-skin-base">
					<div className="grow">Buy</div>
					<div>11/20</div>
				</div>
			</Link>
			<Link className="w-full grow" to={`/tasks/${id}`}>
				<div className="w-full grow p-4 rounded-lg border">Buy</div>
			</Link>
			<Link className="w-full grow" to={`/tasks/${id}`}>
				<div className="w-full grow p-4 rounded-lg border">Buy</div>
			</Link>
		</div>
	);
};
