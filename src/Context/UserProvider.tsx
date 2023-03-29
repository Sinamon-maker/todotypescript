import React, { useContext, useState, useCallback, useMemo, useEffect } from 'react';
import { Outlet, useNavigate, useLoaderData } from 'react-router-dom';
import { UserContext } from './UserContext';

import getUser from '../Hooks/getUser';

import { ContextUser } from '../globalTypes';

type Props = {
	children: React.ReactNode;
};

export const UserProvider = ({ children }: Props) => {
	const navigate = useNavigate();

	const [logoName, setLogoName] = useState<ContextUser>(null);

	const { user, isLoading } = getUser();

	useEffect(() => {
		if (user !== null) {
			setLogoName(user);
			//navigate('/tasks');
		} else {
			if (!isLoading) {
				navigate('/login');
			}
		}
	}, [navigate, user, isLoading]);

	return <UserContext.Provider value={{ logoName, isLoading }}>{children}</UserContext.Provider>;
};
