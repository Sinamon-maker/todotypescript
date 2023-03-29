import { auth } from '../Firebase/Config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';

const useSignup = () => {
	const [error, setError] = useState(null);

	const signup = async (email, password, displayName) => {
		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			if (!res) {
				throw new Error('Could not complete signup');
			}
			setError(null);
			await updateProfile(auth.currentUser, { displayName });
			return res;
		} catch (err) {
			console.log(err.message);
			setError(err.message);
		}
	};

	return { error, signup };
};

export default useSignup;
