export enum Process {
  inprogress = "inprogress",
  done = "done",
}

export type Task = {
  text: string;
  status: Process;
  created: number;
};

export type Users = Array<string>;
