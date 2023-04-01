import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/Config';
import { Data } from '../globalTypes';

export const loadDocFromFirebase = async (id: string) => {
	let error = '';
	let newDoc: Data | null = null;
	try {
		error = '';
		const docSnap = await getDoc(doc(db, 'tasks', id));
		console.log('getDoc', docSnap);

		if (!docSnap.exists()) {
			throw new Error('this task does not exist');
		}
		const docId = docSnap.id as string;
		newDoc = { ...docSnap.data(), id: docId } as Data;
		return { error, newDoc };
	} catch (err) {
		console.log('err', err);
		let message;
		if (err instanceof Error) message = err.message;
		else message = String(err);
		error = message;
		return { error, newDoc };
	}
};
