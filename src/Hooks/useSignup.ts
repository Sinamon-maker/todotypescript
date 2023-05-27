import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Config';

const useSignup = () => {
	const [error, setError] = useState('');

	const signup = async (email: string, password: string, displayName: string) => {
		try {
			const res = await createUserWithEmailAndPassword(auth, email, password);
			if (!res) {
				throw new Error('Could not complete signup');
			}

			if (auth.currentUser) {
				await updateProfile(auth.currentUser, { displayName });
			}
			setError(() => '');
			return res;
		} catch (err) {
			console.log('err', err);
			let message: string;
			if (err instanceof Error) message = err.message;
			else message = String(error);
			console.log('err', err, message);
			setError(() => message);
		}
		return null;
	};

	return { error, signup };
};

export default useSignup;
