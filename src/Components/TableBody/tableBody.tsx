import React, { useContext, useState } from "react";

import IconDone from "../../images/check-mark-line-icon.svg";
import { TaskContext } from "../../Context/taskContext";
import { TextTableElement } from "../TaskTableElements/TextTableElement/textTableElement";
import { TableElementContainer } from "../../Module/TableElementContainer/tableElementContainer";
import { Task } from "../../globalTypes";
import { StatusTableElement } from "../TaskTableElements/StatusTableElement/statusTableElement";

export const TableBody = () => {
  const { listOfTasks, onChangeTask, onChangeStatus, onDeleteClick } =
    useContext(TaskContext);

  const [valueTask, setValueTask] = useState("");
  const [idTaskToEdit, setIdTaskToEdit] = useState(0);

  const list = listOfTasks === null ? [] : listOfTasks;

  const onChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLTextAreaElement) {
      console.log("textarea");
      const newValue = e.target.value;
      setValueTask(newValue);
    }
  };

  const handleClickChangeTask = (
    e: React.MouseEvent<HTMLButtonElement>,
    task: Task
  ) => {
    if (task.status !== "done") setIdTaskToEdit(task.created);
    setValueTask(task.text);
  };

  const canselEditTask = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setIdTaskToEdit(0);
    setValueTask("");
  };

  const onSaveEditTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    onChangeTask(valueTask, idTaskToEdit);
    setIdTaskToEdit(0);
    setValueTask("");
  };

  return (
    <tbody>
      {list.map((task) => {
        return (
          <tr
            key={task.created}
            className=" border-b border-gray-700 dark:border-gray-700 relative"
          >
            <TableElementContainer
              style={
                "whitespace-normal pl-6 pr-2 py-2  sm:py-4 sm:pr-6 md:pl-10 font-medium ext-left text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800 rounded"
              }
            >
              <TextTableElement
                task={task}
                valueTask={valueTask}
                onChange={onChange}
                handleClickChangeTask={handleClickChangeTask}
                id={idTaskToEdit}
              />
            </TableElementContainer>
            <TableElementContainer style="w-8 sm: w-1/6  pl-2 sm:px-6 py-3 text-gray-400 text-center">
              <StatusTableElement
                task={task}
                id={idTaskToEdit}
                onChangeStatus={onChangeStatus}
                canselEditTask={canselEditTask}
              />
            </TableElementContainer>
            <TableElementContainer style="w-1/4 sm:w-1/6 px-2 py-2  sm:py-4 sm:px-6 bg-gray-700 text-center dark:text-white dark:bg-gray-800">
              {task.created === idTaskToEdit && (
                <button
                  className="flex-shrink-0 block self-center bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white p-px sm:py-1 sm:px-2 rounded shadow-lg"
                  type="button"
                  name="saveEdit"
                  onClick={(e) => onSaveEditTask(e)}
                >
                  Save
                </button>
              )}
              {task.created !== idTaskToEdit && (
                <button
                  className="flex-shrink-0 block self-center bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white p-px sm:py-1 sm:px-2 rounded shadow-lg"
                  type="button"
                  name="delete"
                  onClick={(e) => onDeleteClick(e, task.created)}
                >
                  Delete
                </button>
              )}
            </TableElementContainer>
          </tr>
        );
      })}
    </tbody>
  );
};
