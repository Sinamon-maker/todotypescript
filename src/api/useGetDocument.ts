import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../Firebase/Config';
import { Data, serverDataTask } from '../globalTypes';

export const useGetDocument = (id: string) => {
	const [error, setError] = useState('');
	const [newDoc, setDoc] = useState<Data | null>(null);

	useEffect(() => {
		const docRef = doc(db, 'tasks', id);
		const unsub = onSnapshot(
			docRef,
			(docSnap) => {
				if (docSnap.exists()) {
					const newDocum = { ...docSnap.data(), id: docSnap.id } as Data;
					setDoc(newDocum);
				}
			},
			(err) => {
				setError(err.message);
			}
		);
		return unsub;
	}, []);

	return { error, newDoc };
};
