import React, { useContext, useState } from "react";

import { TaskContext } from "../../Context/taskContext";
import { TaskTableRaw } from "../TaskTableRaw/taskTableRaw";

export const TableBody = () => {
  const { listOfTasks } = useContext(TaskContext);

  const list = listOfTasks === null ? [] : listOfTasks;

  return (
    <tbody>
      {list.map((task, index) => {
        return <TaskTableRaw key={index} task={task} index={index} />;
      })}
    </tbody>
  );
};
