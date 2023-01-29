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
  onDeleteClick: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
  canselEditTask: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ActionsTableElement = ({
  task,
  id,
  onChangeStatus,
  onSaveEditTask,
  onDeleteClick,
  canselEditTask,
}: Props) => {
  if (task.created === id) {
    return (
      <>
        <AppButton
          style="flex-shrink-0 block self-center bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white p-px sm:py-1 sm:px-2 rounded shadow-lg"
          nameValue="=saveEditTask"
          title="Save"
          onClick={(e) => onSaveEditTask(e)}
        />
        <AppButton
          style="flex-shrink-0 block self-center bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white p-px sm:py-1 sm:px-2 rounded shadow-lg"
          type="button"
          nameValue="canselEditTask"
          onClick={(e) => canselEditTask(e)}
          title="Cansel"
        />
      </>
    );
  }

  return (
    <>
      <AppButton
        style="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 block self-center border-2 border-solid border-transparent  hover:border-white rounded-lg dark:text-white dark:bg-gray-800"
        nameValue="inProcess"
        onClick={(e) => onChangeStatus(e, task.status, task.created)}
        title="..."
      />
      <AppButton
        style="flex-shrink-0 block self-center bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white p-px sm:py-1 sm:px-2 rounded shadow-lg"
        nameValue="deleteTask"
        title="Delete"
        onClick={(e) => onDeleteClick(e, task.created)}
      />
    </>
  );
};
