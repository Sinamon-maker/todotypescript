import { auth } from '../Firebase/Config';
import { signOut } from 'firebase/auth';
import { useState } from 'react';

const useLogout = () => {
	const [error, setError] = useState<string | null>(null);
	const logout = async () => {
		setError(null);
		try {
			await signOut(auth);
		} catch (err) {
			console.log(err);
			let message;
			if (err instanceof Error) message = err.message;
			else message = String(error);
			setError(message);
		}
	};

	return { error, logout };
};

export default useLogout;
