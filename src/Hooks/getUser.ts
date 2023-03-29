import { auth } from '../Firebase/Config';
import { User, onAuthStateChanged } from 'firebase/auth';

import { useState, useEffect } from 'react';
type Us = {} | null;

const getUser = () => {
	const l: null | {} = null;
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
			console.log(firebaseUser?.displayName);
			if (isLoading) {
				setIsLoading(false);
			}
			setUser(firebaseUser);
		});

		return unsubscribe;
	}, [setUser]);

	return { user, isLoading };
};
export default getUser;
