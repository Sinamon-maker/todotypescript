import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './userContext';

import UseGetUser from '../Hooks/UseGetUser';

import { ContextUser } from '../globalTypes';
import { Loader } from '../Components/Loader/loader';

type Props = {
	children: React.ReactNode;
};

export const UserProvider = ({ children }: Props) => {
	const { user: logoName, isLoading } = UseGetUser();

	const userContextValue = useMemo(() => ({ logoName, isLoading }), [logoName, isLoading]);
	if (!logoName && isLoading) return <Loader />;
	return <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>;
};
