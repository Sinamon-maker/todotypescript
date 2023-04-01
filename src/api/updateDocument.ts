import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../Firebase/Config';
import { Data } from '../globalTypes';

export const updateTask = async (collectionName: string, updatedField: Partial<Data>, id: string) => {
	const docRef = doc(db, collectionName, id);
	await updateDoc(docRef, updatedField);
};
