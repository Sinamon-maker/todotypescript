import React, { useEffect, useState } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { UserContext } from '../../Context/UserContext';

import { Header } from '../../Components/Header/header';
import { removeCurrentUserFromStore } from '../../Utils';

const Home = () => {
	const navigate = useNavigate();

	const [logoName, setLogoName] = useState('');

	useEffect(() => {
		const user = localStorage.getItem('currentUser');
		if (!user) {
			navigate('/login');
		} else {
			setLogoName(user);
		}
	}, [navigate]);

	const logout = () => {
		setLogoName('');
		removeCurrentUserFromStore();
		navigate('/');
	};

	return (
		<UserContext.Provider value={logoName}>
			<div className="flex flex-col h-screen">
				<Header handleClick={logout} />
				<Outlet />
			</div>
		</UserContext.Provider>
	);
};

export default Home;
