import React from "react";

import { AppButton } from "../../../Module/Button/button";

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
  onSaveEditTask: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const StatusTableElement = ({
  task,
  id,
  onChangeStatus,
  onSaveEditTask,
}: Props) => {
  if (task.status === "done") {
    return (
      <span className="flex-shrink-0 block w-6 h-6 sm:w-8 sm:h-8   flex  justify-center items-center border-2 border-solid border-transparent  rounded-lg dark:text-white dark:bg-orange-400">
        <IconDone
          fill="white"
          whith="30px"
          heght="auto"
          className="w-4 sm:w-4"
        />
      </span>
    );
  }

  if (task.created === id) {
    return (
      <AppButton
        style="flex-shrink-0 block self-center bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white p-px sm:py-1 sm:px-2 rounded shadow-lg"
        nameValue="=saveEditTask"
        title="Save"
        onClick={(e) => onSaveEditTask(e)}
      />
    );
  }

  return (
    <AppButton
      style="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 block self-center border-2 border-solid border-transparent  hover:border-white rounded-lg dark:text-white dark:bg-gray-800"
      nameValue="inProcess"
      onClick={(e) => onChangeStatus(e, task.status, task.created)}
      title="..."
    />
  );
};
