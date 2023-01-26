import React from "react";

import { Container } from "../../Module/Container/container";
import IconDone from "../../images/check-mark-line-icon.svg";

import { Task } from "../../globalTypes";

import { KeyboardEvent } from "react";

type Props = {
  onNewTask: (e: React.FormEvent<EventTarget>) => void;
  handleChange: (e: React.ChangeEvent<EventTarget>) => void;
  taskName: string;
  listOfTasks: Array<Task>;
  disableSave: boolean;
  onPressEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
  onDeleteClick: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
  onChangeStatus: (
    e: React.MouseEvent<HTMLButtonElement>,
    val1: string,
    val2: number
  ) => void;
};

export const ContentOfTasks = ({
  onNewTask,
  handleChange,
  taskName,
  listOfTasks,
  disableSave,
  onPressEnter,
  onDeleteClick,
  onChangeStatus,
}: Props) => {
  return (
    <main className="w-full md:w-3/4 px-1 m-auto grow ">
      <Container>
        <form
          onSubmit={onNewTask}
          className="w-full max-w-xl  rounded px-6 sm:px-10 pt-4 pb-0 "
          name="onLogin"
        >
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              name="task"
              autoFocus
              value={taskName}
              placeholder="Buy products"
              aria-label="Full name"
              onChange={handleChange}
              onKeyDown={onPressEnter}
            />

            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 disabled:opacity-25 text-sm border-4 text-white py-1 px-2 rounded shadow-lg"
              type="submit"
              name="addTask"
              disabled={disableSave}
            >
              Save
            </button>
          </div>
        </form>

        <table className="table-fixed w-full sm:w-full min-w-fit  text-sm text-left text-blue-600 dark:text-gray-400 rounded shadow-lg">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Product name
              </th>
              <th scope="col" className="w-8 sm: w-1/6  pl-2 sm:px-6 py-3">
                Status
              </th>
              <th
                scope="col"
                className="w-1/4 sm:w-1/6 px-2 py-3 bg-gray-50 dark:bg-gray-800"
              >
                Del
              </th>
            </tr>
          </thead>
          <tbody>
            {listOfTasks.map((task) => {
              return (
                <tr
                  key={Math.random() * 100}
                  className=" border-b border-gray-700 dark:border-gray-700"
                >
                  <td className="whitespace-normal pl-6 pr-2 py-2  sm:py-4 sm:pr-6 md:pl-10 font-medium ext-left text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                    {task.text}
                  </td>
                  <td className="w-8 sm: w-1/6  pl-2 sm:px-6 py-3 text-gray-400 text-center">
                    {task.status === "inprogress" ? (
                      <button
                        onClick={(e) =>
                          onChangeStatus(e, task.status, task.created)
                        }
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
                          className="w-4  sm:w-4"
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
        </table>
      </Container>
    </main>
  );
};
