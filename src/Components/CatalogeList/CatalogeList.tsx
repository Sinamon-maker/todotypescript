import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getCollection from '../../Hooks/getCollection';
import getDocum from '../../Hooks/getDocument';
import { collection, getDocs, QuerySnapshot, DocumentData } from 'firebase/firestore';
import { db } from '../../Firebase/Config';
import { Data } from '../../globalTypes';

export const CatalogeList = () => {
	const { documents, error } = getCollection('tasks');
	console.log('documents', documents);
	//	const loadData = useLoaderData() as Task[] | [];
	const [todos, setTodos] = useState<Data[] | []>([]);

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
