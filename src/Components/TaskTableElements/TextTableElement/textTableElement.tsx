import React from "react";
import { Task } from "../../../globalTypes";

type Props = {
  task: Task;
  valueTask: string;
  id: number;
  onChange: (e: React.ChangeEvent<EventTarget>) => void;
  handleClickChangeTask: (
    e: React.MouseEvent<HTMLButtonElement>,
    val: Task
  ) => void;
};

export const TextTableElement = ({
  task,
  valueTask,
  onChange,
  handleClickChangeTask,
  id,
}: Props) => {
  const editable: boolean =
    task.created === id && task.status !== "done" ? true : false;

  if (editable) {
    return (
      <textarea
        id="message"
        rows={3}
        className="block p-2.5 w-full text-gray-900"
        value={valueTask}
        onChange={onChange}
      />
    );
  }

  return (
    <button
      className="block w-full w-full text-left"
      onClick={(e) => handleClickChangeTask(e, task)}
    >
      {task.text}
    </button>
  );
};
