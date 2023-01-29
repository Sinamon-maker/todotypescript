import React, { useContext, useState } from "react";

import { TaskContext } from "../../Context/taskContext";
import { TextTableElement } from "../TaskTableElements/TextTableElement/textTableElement";
import { TableElementContainer } from "../../Module/TableElementContainer/tableElementContainer";
import { Task } from "../../globalTypes";
import { ActionsTableElement } from "../TaskTableElements/ActionsTableElement/actionsTableElement";

export const TableBody = () => {
  const { listOfTasks, onChangeTask, onChangeStatus, onDeleteClick } =
    useContext(TaskContext);

  const [valueTask, setValueTask] = useState("");
  const [idTaskToEdit, setIdTaskToEdit] = useState(0);

  const refWrap = React.useRef<HTMLTableSectionElement>(null);
  React.useEffect(() => {
    const handleClick = (ev: any) => {
      if (refWrap !== undefined) {
        const el = refWrap?.current;

        if (!el || el.contains((ev?.target as Node) || null)) {
          return;
        }
        canselEditTask(ev);
        console.log("2", el);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [refWrap]);

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

  const canselEditTask = (e: React.MouseEvent<HTMLElement>) => {
    console.log("canselEdit");
    setIdTaskToEdit(0);
    setValueTask("");
  };

  const onSaveEditTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    onChangeTask(valueTask, idTaskToEdit);
    setIdTaskToEdit(0);
    setValueTask("");
  };

  return (
    <tbody ref={refWrap}>
      {list.map((task, index) => {
        return (
          <tr
            key={task.created}
            className=" border-b border-gray-700 dark:border-gray-700 relative"
          >
            <TableElementContainer style="w-6 sm: w-1/6  pl-2 sm:px-6 py-3 text-gray-400 text-center">
              {index + 1}
            </TableElementContainer>

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

            <TableElementContainer style="w-1/4 sm:w-1/6 px-2 py-2  sm:py-4 sm:px-6 bg-gray-700 text-center dark:text-white dark:bg-gray-800">
              <ActionsTableElement
                task={task}
                id={idTaskToEdit}
                onChangeStatus={onChangeStatus}
                onSaveEditTask={onSaveEditTask}
                onDeleteClick={onDeleteClick}
                canselEditTask={canselEditTask}
              />
            </TableElementContainer>
          </tr>
        );
      })}
    </tbody>
  );
};
