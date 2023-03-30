import { useEffect, useState } from 'react';
import { collection, onSnapshot, CollectionReference } from 'firebase/firestore';

import { Task, Data } from '../globalTypes';
import { db } from '../Firebase/Config';

const getCollection = (collectionName: string) => {
	const [documents, setDocuments] = useState<any[] | null>(null);
	const [error, setError] = useState('');

	let colRef = collection(db, collectionName);
	//const citiesRef = collection(db, collectionName) as CollectionReference<Data>;

	useEffect(() => {
		const unsub = onSnapshot(
			colRef,
			(snapshot) => {
				let results: any[] = [];
				snapshot.docs.forEach((doc) => {
					console.log('doc');
					doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
				});
				setDocuments(results);
			},
			(err) => {
				console.log('err', err);
				let message;
				if (err instanceof Error) message = err.message;
				else message = String(error);
				setError(message);
			}
		);
		return unsub;
	}, []);

	return { documents, error };
};

export default getCollection;
