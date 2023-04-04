import { useState, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/Config';

const UseGetUser = () => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
			console.log(firebaseUser?.displayName);

			setIsLoading(false);

			setUser(firebaseUser);
		});

		return unsubscribe;
	}, [setUser]);

	return { user, isLoading };
};
export default UseGetUser;
