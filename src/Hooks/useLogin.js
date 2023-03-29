import { auth } from '../Firebase/Config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const useLogin = () => {
	const [error, setError] = useState(null);
	const login = async (email, password) => {
		setError(null);
		try {
			setError(null);
			const res = await signInWithEmailAndPassword(auth, email, password);
			return res;
		} catch (err) {
			console.log(err.message);
			setError('Incorrect login cridentials');
		}
	};
	return { error, login };
};

export default useLogin;
