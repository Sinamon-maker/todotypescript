export declare enum Process {
    inprogress = "inprogress",
    done = "done"
}
export type Task = {
    text: string;
    status: Process;
    created: number;
};
export type List = Array<Task>;
export type Users = Array<string>;
export type TableHead = {
    text: string;
    style: string;
};
export type TableHeadings = TableHead[];
