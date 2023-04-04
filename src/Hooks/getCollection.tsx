import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where, WhereFilterOp } from 'firebase/firestore';
import { db } from '../Firebase/Config';

const useGetCollection = <T,>(collectionName: string, q?: [string, WhereFilterOp, string | undefined]) => {
	const [documents, setDocuments] = useState<T[] | []>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		const colRe = collection(db, collectionName);
		let colRef;
		if (q && q[q.length - 1]) {
			colRef = query(colRe, where(...q));
		} else colRef = colRe;

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
				else message = String(err);
				setError(message);
			}
		);

		return unsub;
	}, [collectionName, q]);

	return { documents, error };
};

export default useGetCollection;
