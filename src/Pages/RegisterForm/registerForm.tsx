import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppInput } from '../../Module/Input/Input';
import { AppButton } from '../../Module/Button/Button';
import { Error } from '../../Components/Error/Error';
import { findUser, setCurrentUserToStore, addNewUserToStorage } from '../../Utils';

export const RegisterForm = () => {
	const [userName, setUserName] = useState('');
	const [errorName, setErrorName] = useState('');

	const navigate = useNavigate();

	const [disableRegister, setDisableRegister] = useState(true);

	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLInputElement) {
			setErrorName('');
			const newValue = e.target.value;
			setUserName(newValue);
			if (e.target.value.length > 2) {
				setDisableRegister(false);
			}
			if (e.target.value.length < 3) {
				setDisableRegister(true);
			}
		}
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setUserName('');
		setErrorName('');
		navigate('/');
	};

	const onRegister = (e: React.FormEvent<EventTarget>): void => {
		e.preventDefault();
		const user = findUser(userName);
		if (user) {
			const error = 'User with this name also exists try another name';
			setErrorName(error);
		} else {
			const userId = userName;
			addNewUserToStorage(userName);

			setCurrentUserToStore(userName);
			setUserName('');

			setDisableRegister(false);

			const destination = `/tasks/${userId}`;

			navigate(`${destination}`, { replace: true });
		}
	};

	return (
		<div className="w-128">
			<form onSubmit={onRegister} className="w-full max-w-md m-auto bg-fill-main rounded p-10 pb-8 shadow-lg" name="onRegister">
				<div className="flex items-center border-b border-fill-weak py-2">
					<AppInput
						style="appearance-none bg-transparent border-none w-full  text-skin-base mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						nameValue="register"
						value={userName}
						placeholder="Jane Doe"
						ariaLabel="Full name"
						onChange={handleChange}
					/>

					<AppButton
						style="flex-shrink-0 bg-fill-weak hover:bg-fill-strong border-fill-weak hover:border-fill-strong disabled:opacity-25 text-sm border-4 text-skin-base py-1 px-2 rounded shadow-lg"
						nameValue="registerUser"
						type="submit"
						disabled={disableRegister}
						title="Save"
					/>

					<AppButton
						style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg"
						type="button"
						nameValue="cansel"
						onClick={(e) => handleClick(e)}
						title="Cansel"
					/>
				</div>
				{{ errorName } && <Error message={errorName} />}
			</form>
		</div>
	);
};
