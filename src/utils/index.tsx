import { updateTask } from '../api/updateDocument';
import { Data, SortParam, Task, Users } from '../globalTypes';

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

export const sortList = (list: Array<Task>, sort: SortParam) => {
	if (sort === SortParam.done) {
		return list?.filter((task) => task.status).sort((a, b) => b.created - a.created);
	}
	if (sort === SortParam.ongoing) {
		return list?.filter((task) => !task.status).sort((a, b) => b.created - a.created);
	}
	return list.slice().sort((a, b) => b.created - a.created);
};

const changeStatusOfTask = <T extends { status: boolean; created: number }>(item: T, idCompare: number): T => {
	if (item.created === idCompare) return { ...item, status: !item.status };
	return item;
};

export const changeStatus = async (data: Data, id: number) => {
	const newTaskList = data.tasks.map((task: Task) => changeStatusOfTask(task, id));

	try {
		await updateTask('tasks', { tasks: newTaskList }, data?.id);
	} catch (err) {
		console.log(err);
	}
};

const isTaskForDelete = <T extends { created: number }>(item: T, idCompare: number) => item.created === idCompare;

export const deleteTask = async (data: Data, id: number) => {
	const newTaskList: Task[] | [] = data.tasks.filter((task: Task) => !isTaskForDelete(task, id));

	await updateTask('tasks', { tasks: newTaskList }, data?.id);
};

export const changeTask = async (data: Data, newTask: Task) => {
	const newList = data?.tasks.map((task) => {
		if (task.created === newTask.created) {
			return { ...newTask };
		}

		return task;
	});

	await updateTask('tasks', { tasks: newList }, data?.id);
};

export const onNewTask = async (data: Data, task: Task) => {
	const newList: Array<Task> = [...data.tasks];
	newList.push(task);
	await updateTask('tasks', { tasks: newList }, data?.id);
};
