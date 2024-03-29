import { SortParam, Task } from '../globalTypes';
export declare const findUser: (user: string) => string | null;
export declare const addNewUserToStorage: (user: string) => void;
export declare const findTasks: (user: string) => Task[] | null;
export declare const deleteTask: (user: string, list: Task[]) => void;
export declare const saveInStorage: <T>(user: string, list: T[]) => void;
export declare const setCurrentUserToStore: (user: string) => void;
export declare const removeCurrentUserFromStore: () => void;
export declare const sortList: (list: Array<Task>, sort: SortParam) => Task[];
