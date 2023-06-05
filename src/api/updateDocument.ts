import { doc, updateDoc, DocumentData, WithFieldValue } from 'firebase/firestore';
import { db } from '../Firebase/Config';

export const updateField = async <T extends WithFieldValue<DocumentData>>(collectionName: string, updatedField: T, id: string) => {
	const docRef = doc(db, collectionName, id);
	await updateDoc(docRef, updatedField);
};
