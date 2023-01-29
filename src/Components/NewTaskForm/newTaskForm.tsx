import React from "react";
import { AppButton } from "../../Module/Button/button";

type Props = {
  onNewTask: (e: React.FormEvent<EventTarget>) => void;
  handleChange: (e: React.ChangeEvent<EventTarget>) => void;
  taskName: string;
  disableSave: boolean;
  onPressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const NewTaskForm = ({
  onNewTask,
  taskName,
  handleChange,
  onPressEnter,
  disableSave,
}: Props) => {
  return (
    <form
      onSubmit={onNewTask}
      className="w-full max-w-xl  rounded px-6 sm:px-10 pt-4 pb-0 "
      name="newTask"
    >
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-400 text-slate-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          name="task"
          autoFocus
          value={taskName}
          placeholder="Buy products"
          aria-label="Full name"
          onChange={handleChange}
          onKeyDown={onPressEnter}
        />

        <AppButton
          style="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 disabled:opacity-25 text-sm border-4 text-white py-1 px-2 rounded shadow-lg"
          type="submit"
          nameValue="addTask"
          disabled={disableSave}
          title="Save"
        />
      </div>
    </form>
  );
};
