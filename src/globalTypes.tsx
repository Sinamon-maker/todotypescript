import { User } from 'firebase/auth';

export type ContextUser = User | null;

export interface Items<ObjectType> {
	list: ObjectType[];
}

export enum SortParam {
	all = 'All',
	done = 'Done',
	ongoing = 'Ongoing',
}

export type Folder = {
	name: string;
	id: string;
	userId: string;
	createdAt: number;
};

export type Folders = Folder[];

export interface Task {
	text: string;
	status: boolean;
	created: number;
	detailes?: string;
}

export interface Data {
	title: string;
	id: string;
	createdAt: number;
	userId: string;
	tasks: Array<Task>;
	displayName: string;
	folder: string;
}

export type UserObject = {
	id: string;
	displayName: string;
	email: string;
};

export type UsersCollection = {
	userId: string;
	folders: Folder[];
};
export type serverDataTask = {
	newDoc: Data | null;
	error: string;
	isLoading: boolean;
};

export type List = Array<Task>;

export type Users = Array<string>;

export type TableHead = {
	text: string;
	style: string;
};

export type TableHeadings = TableHead[];
