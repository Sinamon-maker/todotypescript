import { Task } from "../globalTypes";
export declare const findUser: (user: string) => string | null;
export declare const findTasks: (user: string) => Task[];
export declare const saveTasks: (user: string, tasks: Array<Task>) => void;
export declare const deleteTask: (user: string, list: Task[]) => void;
export declare const saveInStorage: (user: string, list: Task[]) => void;
