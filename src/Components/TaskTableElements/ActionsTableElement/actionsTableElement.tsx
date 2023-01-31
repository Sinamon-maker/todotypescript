import React from "react";

import { AppButton } from "../../../Module/Button/button";
import ImageDone from "../../../images/check.svg";
import Cansel from "../../../images/cansel.svg";

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
  cancelEditBeforeDelete: () => void;
};

export const ActionsTableElement = ({
  task,
  id,
  onChangeStatus,
  onSaveEditTask,
  cancelEditBeforeDelete,
  canselEditTask,
  onDeleteClick,
}: Props) => {
  const disableFinished = task.status === "done" ? true : false;

  const delClick = (e: React.MouseEvent<HTMLButtonElement>, val: number) => {
    cancelEditBeforeDelete();
    onDeleteClick(e, val);
  };

  if (task.created === id) {
    return (
      <span className="block w-full h-full flex flex-col items-center  sm:flex-row gap-2 sm:justify-between">
        <AppButton
          style="flex-shrink-0 block self-center bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white p-px sm:py-1 sm:px-2 rounded shadow-lg"
          nameValue="=saveEditTask"
          title="Save"
          onClick={(e) => onSaveEditTask(e)}
        />
        <AppButton
          style="w-6 h-6 sm:w-8 sm:h-8 block border-2 border-teal-500 text-teal-500  hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4"
          type="button"
          nameValue="canselEditTask"
          title=""
          onClick={(e) => canselEditTask(e)}
          Icon={<Cansel fill="white" className="w-4 h-4 sm:w-6 sm:g-6" />}
        />
      </span>
    );
  }

  return (
    <span className="block w-full h-full flex flex-col items-center ssm:flex-row gap-2 ssm:justify-between">
      {task.status === "done" ? (
        <AppButton
          style="w-6 h-6 sm:w-8 sm:h-8 block border-2 border-teal-500  hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white  rounded-full shadow-lg flex justify-center items-center disabled:opacity-80 disabled:bg-gray-800 disabled:border-teal-700"
          nameValue="inProcess"
          onClick={(e) => onChangeStatus(e, task.status, task.created)}
          title=""
          disabled={disableFinished}
          Icon={<ImageDone className="w-4 h-4 sm:w-6 sm:g-6" />}
        />
      ) : (
        <AppButton
          style="w-6 h-6 sm:w-8 sm:h-8 block border-2 border-teal-500 disabled:opacity-5  hover:bg-teal-700 border-teal-500 hover:border-teal-700  text-sm border-4 text-white p-px sm:py-1 sm:px-2 rounded-full shadow-lg flex justify-center items-center "
          nameValue="inProcess"
          onClick={(e) => onChangeStatus(e, task.status, task.created)}
          title=""
          disabled={disableFinished}
        />
      )}
      <AppButton
        style="flex-shrink-0 block self-center bg-teal-500 disabled:opacity-25 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white p-px sm:py-1 sm:px-2 rounded shadow-lg"
        nameValue="deleteTask"
        title="Delete"
        onClick={(e) => delClick(e, task.created)}
      />
    </span>
  );
};
