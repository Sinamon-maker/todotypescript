import { useState } from 'react';
import { collection, addDoc, DocumentData, WithFieldValue } from 'firebase/firestore';
import { db } from '../Firebase/Config';

const useCollection = <T extends WithFieldValue<DocumentData>>(collectionName: string) => {
	const [error, setError] = useState('');
	const [addedDoc, setAddedDoc] = useState('');

	const addDocument = async (doc: T) => {
		setError('');
		try {
			const ref = collection(db, collectionName);
			const res = await addDoc(ref, doc);

			console.log('added doc', res);
			setAddedDoc(res.id);
			return res.id;
		} catch (err) {
			console.log(err);
			setError('could not send the message');
		}
		return null;
	};
	return { error, addDocument, addedDoc };
};

export default useCollection;
