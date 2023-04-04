import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where, CollectionReference, DocumentData, Query } from 'firebase/firestore';
import { db } from '../Firebase/Config';

const useGetCollection = <T,>(collectionName: string, q?: string | undefined) => {
	const [documents, setDocuments] = useState<T[] | []>([]);
	const [error, setError] = useState('');
	const [isPending, setIsPending] = useState(true);

	useEffect(() => {
		const colRe = collection(db, collectionName);
		let colRef: CollectionReference<DocumentData> | Query<DocumentData>;
		if (q && q[q.length - 1]) {
			colRef = query(collection(db, collectionName), where('userId', '==', q));
		} else {
			colRef = colRe;
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
			}
		);

		return unsub;
	}, [collectionName, q]);

	return { documents, error, isPending };
};

export default useGetCollection;
