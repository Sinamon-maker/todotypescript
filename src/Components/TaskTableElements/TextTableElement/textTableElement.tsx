import React from "react";

import { AppButton } from "../../../Module/Button/button";
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
  if (task.status === "done") {
    return (
      <span className="block w-full h-full py-6 text-left">{task.text}</span>
    );
  }

  if (task.created === id) {
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
    <AppButton
      style="block w-full h-full py-6 text-left"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
        handleClickChangeTask(e, task)
      }
      title={task.text}
      nameValue="taskText"
    />
  );
};
