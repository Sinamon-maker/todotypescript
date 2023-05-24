import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../Firebase/Config';

export const useGetDocument = <T>(id: string, collectionName: string) => {
	const [error, setError] = useState('');
	const [newDoc, setDoc] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const docRef = doc(db, collectionName, id);
		const unsub = onSnapshot(
			docRef,
			(docSnap) => {
				if (docSnap.exists()) {
					const newDocum = { ...docSnap.data(), id: docSnap.id } as T;
					setDoc(newDocum);
					setIsLoading(false);
				}
			},
			(err) => {
				setError(err.message);
				setIsLoading(false);
			}
		);
		return unsub;
	}, [collectionName, id]);

	return { error, newDoc, isLoading };
};
