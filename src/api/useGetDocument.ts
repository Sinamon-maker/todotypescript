import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../Firebase/Config';
import { Data, serverDataTask } from '../globalTypes';

export const useGetDocument = (id: string) => {
	const [error, setError] = useState('');
	const [newDoc, setDoc] = useState<Data | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const docRef = doc(db, 'tasks', id);
		const unsub = onSnapshot(
			docRef,
			(docSnap) => {
				if (docSnap.exists()) {
					const newDocum = { ...docSnap.data(), id: docSnap.id } as Data;
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
	}, []);

	return { error, newDoc, isLoading };
};
