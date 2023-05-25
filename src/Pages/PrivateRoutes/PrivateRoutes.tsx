import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { UserContext } from '../../Context/userContext';

export const PrivateRoutes = () => {
	const { isLoading, logoName } = useContext(UserContext);

	console.log('Welcome', isLoading, logoName);

	if (!logoName) return <Navigate to="/login" />;
	return <Outlet />;
};
