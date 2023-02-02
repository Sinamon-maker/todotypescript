import React from "react";

import { AppButton } from "../../../Module/Button/button";
import ImageDone from "../../../images/check.svg";
import Cansel from "../../../images/cansel.svg";
import ImageDelete from "../../../images/trash.svg";

import { Task } from "../../../globalTypes";

type Props = {
  task: Task;
  id: number;
  onChangeStatus: (
    e: React.MouseEvent<HTMLButtonElement>,
    val: number,
    val2: string
  ) => void;
  delClick: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
  onClickCanselEditTask: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSaveEditTask: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ActionsTableElement = ({
  task,
  id,
  onChangeStatus,
  delClick,
  onClickCanselEditTask,
  onSaveEditTask,
}: Props) => {
  const disableFinished = task.status === "done" ? true : false;

  if (task.created === id) {
    return (
      <span className="block w-full h-full flex items-end  sm:flex-row gap-2 sm:justify-between">
        <AppButton
          style="w-6 h-6 sm:w-8 sm:h-8 block border-2 border-teal-500  hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white  rounded-full shadow-lg flex justify-center items-center disabled:opacity-80 disabled:bg-gray-800 disabled:border-teal-700"
          type="button"
          nameValue="canselEditTask"
          title=""
          onClick={(e) => onClickCanselEditTask(e)}
          Icon={<Cansel fill="white" className="w-4 h-4 sm:w-10 sm:h-10" />}
        />
        <AppButton
          style="flex-shrink-0 block self-center bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white p-px sm:py-1 sm:px-2 rounded shadow-lg"
          nameValue="=saveEditTask"
          title="Save"
          onClick={(e) => onSaveEditTask(e)}
        />
      </span>
    );
  }

  return (
    <span className="block w-full h-full flex justify-between ssm:flex-row gap-2 ssm:justify-between">
      {task.status === "done" ? (
        <AppButton
          style="w-6 h-6 sm:w-8 sm:h-8 block border-2 border-teal-500  hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white  rounded-full shadow-lg flex justify-center items-center disabled:opacity-80 disabled:bg-gray-800 disabled:border-teal-700"
          nameValue="inProcess"
          onClick={(e) => onChangeStatus(e, task.created, task.status)}
          title=""
          disabled={disableFinished}
          Icon={<ImageDone className="w-4 h-4 sm:w-10 sm:h-10" />}
        />
      ) : (
        <AppButton
          style="w-6 h-6 sm:w-8 sm:h-8 block border-2 border-teal-500 disabled:opacity-5  hover:bg-teal-700 border-teal-500 hover:border-teal-700  text-sm border-4 text-white p-px sm:py-1 sm:px-2 rounded-full shadow-lg flex justify-center items-center "
          nameValue="inProcess"
          onClick={(e) => onChangeStatus(e, task.created, task.status)}
          title=""
          disabled={disableFinished}
        />
      )}
      <AppButton
        style="w-6 h-6 sm:w-8 sm:h-8 block border-2 border-teal-500  hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white  rounded-full shadow-lg flex justify-center items-center disabled:opacity-80 disabled:bg-gray-800 disabled:border-teal-700"
        nameValue="deleteTask"
        title=""
        onClick={(e) => delClick(e, task.created)}
        Icon={<ImageDelete className="w-4 h-4 sm:w-10 sm:h-10" />}
      />
    </span>
  );
};
