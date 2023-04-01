import { User } from 'firebase/auth';
export type ContextUser = User | null;
export interface Items<ObjectType> {
    list: ObjectType[];
}
export declare enum SortParam {
    all = "All",
    done = "Done",
    ongoing = "Ongoing"
}
export interface Task {
    text: string;
    status: boolean;
    created: number;
}
export interface Data {
    title: string;
    id: string;
    createdAt: Data | null;
    userId: string;
    tasks: Array<Task>;
    displayName: string;
}
export type UserObject = {
    id: string;
    displayName: string;
    email: string;
};
export type List = Array<Task>;
export type Users = Array<string>;
export type TableHead = {
    text: string;
    style: string;
};
export type TableHeadings = TableHead[];
