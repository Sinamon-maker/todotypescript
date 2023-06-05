import { doc, writeBatch } from 'firebase/firestore';
import { db } from '../Firebase/Config';

export const deleteFolder = async (idFolder: string, arr: string[]) => {
	const batch = writeBatch(db);
	const folderDocRef = doc(db, 'folders', idFolder);

	batch.delete(folderDocRef);

	arr.forEach((it) => {
		const taskRef = doc(db, 'tasks', it);
		batch.delete(taskRef);
	});

	await batch.commit();
};
