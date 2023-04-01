import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../Firebase/Config';

const useGetCollection = <T,>(collectionName: string) => {
	const [documents, setDocuments] = useState<T[] | []>([]);
	const [error, setError] = useState('');
	const colRef = collection(db, collectionName);

	useEffect(() => {
		const unsub = onSnapshot(
			colRef,
			(snapshot) => {
				const results = [] as T[];
				snapshot.docs.forEach((doc) => {
					console.log('doc');
					const d = { ...doc.data(), id: doc.id } as T;
					results.push(d);
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { documents, error };
};

export default useGetCollection;
