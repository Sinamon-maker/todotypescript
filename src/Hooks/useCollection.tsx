import { db } from '../Firebase/Config';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';

const useCollection = (collectionName: string) => {
	const [error, setError] = useState('');

	const addDocument = async (doc: any) => {
		setError('');
		try {
			const refDoc = collection(db, collectionName);
			await addDoc(refDoc, doc);
		} catch (err) {
			console.log(err);
			setError('could not send the message');
		}
	};
	return { error, addDocument };
};

export default useCollection;
