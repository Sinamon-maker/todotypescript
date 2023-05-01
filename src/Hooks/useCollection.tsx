import { useState } from 'react';
import { collection, addDoc, DocumentData, WithFieldValue } from 'firebase/firestore';
import { db } from '../Firebase/Config';

const useCollection = <T extends WithFieldValue<DocumentData>>(collectionName: string) => {
	const [error, setError] = useState('');

	const addDocument = async (doc: T) => {
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
