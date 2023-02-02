export enum Process {
  inprogress = "inprogress",
  done = "done",
}

export interface Items<ObjectType> {
  list: ObjectType[];
}

export interface Task {
  text: string;
  status: Process;
  created: number;
}

export type List = Array<Task>;

export type Users = Array<string>;

export type TableHead = {
  id: number;
  text: string;
  style: string;
};

export type TableHeadings = TableHead[];
