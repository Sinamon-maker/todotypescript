import React from "react";

import IconDone from "../../../images/check-mark-line-icon.svg";
import { Task } from "../../../globalTypes";

type Props = {
  task: Task;
  id: number;
  onChangeStatus: (
    e: React.MouseEvent<HTMLButtonElement>,
    val1: string,
    val: number
  ) => void;
  canselEditTask: (
    e: React.MouseEvent<HTMLButtonElement>,

    val: number
  ) => void;
};

export const StatusTableElement = ({
  task,
  id,
  onChangeStatus,
  canselEditTask,
}: Props) => {
  const editable: boolean =
    task.created === id && task.status !== "done" ? true : false;

  if (editable) {
    return (
      <button
        className="flex-shrink-0 block self-center bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white p-px sm:py-1 sm:px-2 rounded shadow-lg"
        type="button"
        name="canselDdelete"
        onClick={(e) => canselEditTask(e, task.created)}
      >
        Cansel
      </button>
    );
  }

  if (task.status === "inprogress")
    return (
      <button
        onClick={(e) => onChangeStatus(e, task.status, task.created)}
        className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 block self-center border-2 border-solid border-transparent  hover:border-white rounded-lg dark:text-white dark:bg-gray-800"
      >
        ...
      </button>
    );
  return (
    <span className="flex-shrink-0 block w-6 h-6 sm:w-8 sm:h-8   flex  justify-center items-center border-2 border-solid border-transparent  rounded-lg dark:text-white dark:bg-orange-400">
      <IconDone fill="white" whith="30px" heght="auto" className="w-4 sm:w-4" />
    </span>
  );
};
