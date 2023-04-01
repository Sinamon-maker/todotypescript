import React from 'react';
import { ContextUser } from '../globalTypes';
type UserAuth = {
    logoName: ContextUser;
    isLoading: boolean;
};
export declare const UserContext: React.Context<UserAuth>;
export {};
