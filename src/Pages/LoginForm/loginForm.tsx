import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Error } from '../../Components/Error/Error';
import { AppInput } from '../../Module/Input/Input';
import { AppButton } from '../../Module/Button/Button';

import { findUser, setCurrentUserToStore } from '../../Utils';

export const LoginForm = () => {
	const [userName, setUserName] = useState('');
	const [errorName, setErrorName] = useState('');
	const [disableLogin, setDisableLogin] = useState(true);

	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLInputElement) {
			if (e.target.name === 'login') {
				setErrorName('');
				const newValue = e.target.value;
				setUserName(newValue);

				if (e.target.value.length > 2) {
					setDisableLogin(false);
				}
				if (e.target.value.length < 3) {
					setDisableLogin(true);
				}
			}
		}
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setUserName('');
		setErrorName('');
		navigate('/');
	};

	const onLogin = (e: React.FormEvent<EventTarget>): void => {
		e.preventDefault();

		const user = findUser(userName);

		if (user) {
			setCurrentUserToStore(userName);
			setUserName('');
			setDisableLogin(false);

			const destination = `/tasks/${user}`;

			navigate(`${destination}`, { replace: true });
		} else {
			const error = 'No such user found. Try again.';
			setErrorName(error);
		}
	};

	return (
		<div className="w-128">
			<form onSubmit={onLogin} className="w-full max-w-md m-auto bg-fill-main rounded p-10 pb-8 shadow-lg" name="onLogin">
				<div className="flex items-center border-b border-fill-weak py-2">
					<AppInput
						style="appearance-none bg-transparent border-none w-full text-skin-base mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						nameValue="login"
						value={userName}
						placeholder="Jane Doe"
						ariaLabel="Full name"
						onChange={handleChange}
					/>

					<AppButton
						style="flex-shrink-0 bg-fill-weak hover:bg-fill-strong disabled:opacity-25 border-fill-weak hover:border-fill-strong text-sm border-4 text-skin-base py-1 px-2 rounded shadow-lg"
						type="submit"
						nameValue="loginUser"
						disabled={disableLogin}
						title="Log In"
					/>

					<AppButton
						style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg"
						nameValue="cansel"
						title="Cansel"
						onClick={(e) => handleClick(e)}
					/>
				</div>
				<Error message={errorName} />
			</form>
		</div>
	);
};
