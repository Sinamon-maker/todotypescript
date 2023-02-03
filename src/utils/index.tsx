import { Task, Users } from '../globalTypes';

export const findUser = (user: string): string | null => {
	const data = localStorage.getItem('users');
	let result = null;

	if (data !== null) {
		const users: Users = JSON.parse(data);
		result = users.find((key) => key === user) as string;
		return result;
	}
	return result;
};

export const addNewUserToStorage = (user: string) => {
	const data = localStorage.getItem('users') as string;
	if (data) {
		const res: Users = JSON.parse(data);
		const newUserList: Users = [...res, user];
		localStorage.setItem('users', JSON.stringify(newUserList));
	} else {
		localStorage.setItem('users', JSON.stringify([user]));
	}
};

export const findTasks = (user: string) => {
	const data = localStorage.getItem(user) as string;

	let list: Task[] | null = null;
	if (data !== null) {
		list = JSON.parse(data);
	}
	return list;
};

export const deleteTask = (user: string, list: Task[]) => {
	const data = JSON.stringify(list);
	localStorage.setItem(user, data);
};

export const saveInStorage = <T,>(user: string, list: T[]) => {
	const data = JSON.stringify(list);
	localStorage.setItem(user, data);
};

export const setCurrentUserToStore = (user: string) => {
	localStorage.setItem('currentUser', user);
};

export const removeCurrentUserFromStore = () => {
	localStorage.removeItem('currentUser');
};
