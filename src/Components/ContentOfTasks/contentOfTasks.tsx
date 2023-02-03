import React, { useContext } from "react";

import { Container } from "../../Module/Container/container";
import { NewTaskForm } from "../NewTaskForm/newTaskForm";
import { Table } from "../Table/table";
import { TaskProvider } from "../../Context/taskProvider";

import { UserContext } from "../../Context/userContext";

import { Task } from "../../globalTypes";

type Props = {
  loadData: Task[] | null;
};

export const ContentOfTasks = ({ loadData }: Props) => {
  const logoName = useContext(UserContext);
  return (
    <>
      <TaskProvider loadData={loadData} logoName={logoName}>
        <main className="w-full  m-auto grow  ">
          <Container>
            <NewTaskForm />
            <Table />
          </Container>
        </main>
      </TaskProvider>
    </>
  );
};
