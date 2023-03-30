import { useState } from 'react';
import { db } from '../Firebase/Config';
import { collection, addDoc, CollectionReference } from 'firebase/firestore';

const useCollection = (collectionName: string) => {
	const [error, setError] = useState('');

	const addDocument = async (doc: any) => {
		setError('');
		try {
			const ref = collection(db, collectionName);
			await addDoc(ref, doc);
		} catch (err) {
			console.log(err);
			setError('could not send the message');
		}
	};
	return { error, addDocument };
};

export default useCollection;
