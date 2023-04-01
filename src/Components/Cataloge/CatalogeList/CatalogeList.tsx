import React from 'react';
import { Link } from 'react-router-dom';
import useGetCollectction from '../../../Hooks/getCollection';
import { Data } from '../../../globalTypes';

export const CatalogeList = () => {
	const { documents, error } = useGetCollectction<Data>('tasks');

	return (
		<div className="w-full flex  flex-col gap-4">
			{documents?.map((docum) => (
				<Link key={docum.id} className="w-full grow hover:scale-105 transition-all" to={`/tasks/${docum.id}`}>
					<div className="w-full  p-4 rounded-lg border flex gap-4 items-center text-skin-base">
						<div className="grow">{docum.title}</div>
						<div>{docum.tasks.length}</div>
					</div>
				</Link>
			))}
		</div>
	);
};
