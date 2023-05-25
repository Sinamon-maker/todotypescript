import React, { useMemo } from 'react';

import { UserContext } from './userContext';

import UseGetUser from '../Hooks/UseGetUser';

import { Loader } from '../Components/Loader/Loader';

type Props = {
	children: React.ReactNode;
};

export const UserProvider = ({ children }: Props) => {
	const { user: logoName, isLoading } = UseGetUser();

	const userContextValue = useMemo(() => ({ logoName, isLoading }), [logoName, isLoading]);
	if (!logoName && isLoading) return <Loader />;
	return <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>;
};
