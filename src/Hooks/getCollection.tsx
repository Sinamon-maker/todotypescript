import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where, CollectionReference, DocumentData, Query, orderBy } from 'firebase/firestore';
import { db } from '../Firebase/Config';

const useGetCollection = <T,>(collectionName: string, q?: string | undefined) => {
	const [documents, setDocuments] = useState<T[] | []>([]);
	const [error, setError] = useState('');
	const [isPending, setIsPending] = useState(true);

	useEffect(() => {
		let colRef: CollectionReference<DocumentData> | Query<DocumentData>;
		if (q && q[q.length - 1]) {
			colRef = query(collection(db, collectionName), where('userId', '==', q), orderBy('createdAt'));
		} else {
			colRef = query(collection(db, collectionName), orderBy('createdAt'));
		}
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
				setIsPending(false);
			},
			(err) => {
				console.log('err', err);
				let message;
				if (err instanceof Error) message = err.message;
				else message = String(err);
				setError(message);
				setIsPending(false);
			}
		);

		return unsub;
	}, [collectionName, q]);

	return { documents, error, isPending };
};

export default useGetCollection;
