import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../Firebase/Config';

export const deleteDocument = async (collectionName: string, uniqId: string) => {
	await deleteDoc(doc(db, collectionName, uniqId));
};
