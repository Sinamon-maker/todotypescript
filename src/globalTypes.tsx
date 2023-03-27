export interface Items<ObjectType> {
	list: ObjectType[];
}

export enum Process {
	inprogress = 'inprogress',
	done = 'done',
}

export enum SortParam {
	all = 'All',
	done = 'Done',
	ongoing = 'Ongoing',
}

export interface Task {
	text: string;
	status: Process;
	created: number;
}

export type List = Array<Task>;

export type Users = Array<string>;

export type TableHead = {
	text: string;
	style: string;
};

export type TableHeadings = TableHead[];
