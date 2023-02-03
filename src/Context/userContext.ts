import React from 'react';

export type ContextUser = string;

export const UserContext = React.createContext<ContextUser>('');
