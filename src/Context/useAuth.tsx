import { useContext } from 'react';
import { UserContext } from './userContext';

export const useAuth = () => useContext(UserContext);
