import React, { useContext } from "react";

import IconDone from "../../images/check-mark-line-icon.svg";
import { TaskContext } from "../../Context/taskContext";

export const TableBody = () => {
  const { listOfTasks, onChangeTask, onChangeStatus, onDeleteClick } =
    useContext(TaskContext);

  const list = listOfTasks === null ? [] : listOfTasks;

  return (
    <tbody>
      {list.map((task) => {
        return (
          <tr
            key={Math.random() * 100}
            className=" border-b border-gray-700 dark:border-gray-700"
          >
            <td className="whitespace-normal pl-6 pr-2 py-2  sm:py-4 sm:pr-6 md:pl-10 font-medium ext-left text-gray-900 bg-gray-50 dark:text-slate-300 dark:bg-gray-800">
              {task.text}
            </td>
            <td className="w-8 sm: w-1/6  pl-2 sm:px-6 py-3 text-gray-400 text-center">
              {task.status === "inprogress" ? (
                <button
                  onClick={(e) => onChangeStatus(e, task.status, task.created)}
                  className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 block self-center border-2 border-solid border-transparent  hover:border-white rounded-lg dark:text-white dark:bg-gray-800"
                >
                  ...
                </button>
              ) : (
                <span className="flex-shrink-0 block w-6 h-6 sm:w-8 sm:h-8   flex  justify-center items-center border-2 border-solid border-transparent  rounded-lg dark:text-white dark:bg-orange-400">
                  <IconDone
                    fill="white"
                    whith="30px"
                    heght="auto"
                    className="w-4 sm:w-4"
                  />
                </span>
              )}
            </td>
            <td className="w-1/4 sm:w-1/6 px-2 py-2  sm:py-4 sm:px-6 bg-gray-700 text-center dark:text-white dark:bg-gray-800">
              <button
                className="flex-shrink-0 block self-center bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white p-px sm:py-1 sm:px-2 rounded shadow-lg"
                type="button"
                name="delete"
                onClick={(e) => onDeleteClick(e, task.created)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
