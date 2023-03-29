import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppInput } from '../../Module/Input/Input';
import { AppButton } from '../../Module/Button/Button';
import { Error } from '../../Components/Error/Error';
import { findUser } from '../../Utils';
import useSignup from '../../Hooks/useSignup';

export const RegisterForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [displayName, setDisplayName] = useState('');
	const { error, signup } = useSignup();

	const navigate = useNavigate();

	const [disableRegister, setDisableRegister] = useState(true);

	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLInputElement) {
			if (e.target.name === 'email') {
				const newValue = e.target.value;
				setEmail(newValue);
			}
			if (e.target.name === 'password') {
				const newValue = e.target.value;
				setPassword(newValue);
			}
			if (e.target.name === 'displayName') {
				const newValue = e.target.value;
				setDisplayName(newValue);
			}
		}
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setEmail('');
		setPassword('');
		navigate('/');
	};

	const onRegister = async (e: React.FormEvent<EventTarget>): Promise<void> => {
		e.preventDefault();
		const user = await signup(email, password, displayName);
		if (error === null) {
			setPassword('');
			setEmail('');
			setDisplayName('');
			const destination = `/tasks`;

			navigate(`${destination}`, { replace: true });
		}
		console.log({ error });
	};

	return (
		<div className="w-128">
			<form onSubmit={onRegister} className="w-full max-w-md m-auto bg-fill-main rounded p-10 pb-8 shadow-lg" name="onRegister">
				<div className=" border-b border-fill-weak py-2 mb-2">
					<AppInput
						style="appearance-none bg-transparent border-none w-full text-skin-base mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						nameValue="displayName"
						value={displayName}
						placeholder="displayName"
						ariaLabel="displayName"
						onChange={handleChange}
					/>
				</div>
				<div className=" border-b border-fill-weak py-2 mb-2">
					<AppInput
						style="appearance-none bg-transparent border-none w-full text-skin-base mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						nameValue="email"
						value={email}
						placeholder="test@rest.com"
						ariaLabel="Email"
						onChange={handleChange}
					/>
				</div>
				<div className=" border-b border-fill-weak py-2 mb-2">
					<AppInput
						style="appearance-none bg-transparent border-none w-full text-skin-base mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="password"
						nameValue="password"
						value={password}
						placeholder="Enter your password"
						ariaLabel="Password"
						onChange={handleChange}
					/>
				</div>
				<Error message={error} />
				<AppButton
					style="flex-shrink-0 bg-fill-weak hover:bg-fill-strong disabled:opacity-25 border-fill-weak hover:border-fill-strong text-sm border-4 text-skin-base py-1 px-2 rounded shadow-lg"
					type="submit"
					nameValue="signUp"
					title="Sign up"
				/>

				<AppButton
					style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg"
					nameValue="cansel"
					title="Cansel"
					onClick={(e) => handleClick(e)}
				/>
			</form>
		</div>
	);
};
