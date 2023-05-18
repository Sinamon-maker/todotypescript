import React, { useContext } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';

import { UserContext } from '../../Context/userContext';

export const PrivateRoutes = () => {
	const { isLoading, logoName } = useContext(UserContext);
	const navigate = useNavigate();

	console.log('Welcome', isLoading, logoName);

	if (!logoName) return <Navigate to="/login" />;
	return (
		<>
			<Outlet />
		</>
	);
};
