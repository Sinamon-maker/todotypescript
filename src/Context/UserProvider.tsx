import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './userContext';

import UseGetUser from '../Hooks/UseGetUser';

import { ContextUser } from '../globalTypes';

type Props = {
	children: React.ReactNode;
};

export const UserProvider = ({ children }: Props) => {
	const navigate = useNavigate();

	const [logoName, setLogoName] = useState<ContextUser>(null);

	const { user, isLoading } = UseGetUser();

	useEffect(() => {
		if (user !== null) {
			setLogoName(user);
		} else {
			setLogoName(null);
		}
	}, [navigate, user, isLoading]);

	const userContextValue = useMemo(() => ({ logoName, isLoading }), [logoName, isLoading]);

	return <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>;
};
