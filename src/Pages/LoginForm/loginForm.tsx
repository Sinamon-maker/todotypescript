import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLogin from '../../Hooks/useLogin';

import { ErrorMessage } from '../../Components/ErrorMessage/ErrorMessage';
import { AppInput } from '../../Module/Input/Input';
import { AppButton } from '../../Module/Button/Apbutton';

export const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const { error, login } = useLogin();

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

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
		}
	};

	const handleClick = () => {
		setEmail('');
		setPassword('');
		navigate('/');
	};

	const onLogin = async (e: React.FormEvent<EventTarget>): Promise<void> => {
		e.preventDefault();
		console.log(email, password);
		await login(email, password);
	};

	return (
		<div className="w-128">
			<form onSubmit={onLogin} className="w-full max-w-md m-auto bg-fill-main rounded p-10 pb-8 shadow-lg" name="onLogin">
				<div className=" border-b border-fill-weak py-2 mb-2">
					<AppInput
						style="appearance-none bg-transparent border-none w-full text-skin-base mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						nameValue="email"
						value={email}
						placeholder="test@rest.com"
						ariaLabel="Email"
						onChange={handleChange}
						inputRef={inputRef}
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
				<ErrorMessage message={error} />
				<AppButton
					style="flex-shrink-0 bg-fill-weak hover:bg-fill-strong disabled:opacity-25 border-fill-weak hover:border-fill-strong text-sm border-4 text-skin-base py-1 px-2 rounded shadow-lg"
					type="submit"
					nameValue="loginUser"
					title="Log In"
				/>

				<AppButton
					style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg"
					nameValue="cansel"
					title="Cansel"
					onClick={handleClick}
				/>
			</form>
		</div>
	);
};
