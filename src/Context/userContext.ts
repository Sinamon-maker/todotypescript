import React from 'react';
import { ContextUser } from '../globalTypes';

type UserAuth = {
	logoName: ContextUser;
	isLoading: boolean;
};

export const UserContext = React.createContext<UserAuth>({ logoName: null, isLoading: true });
