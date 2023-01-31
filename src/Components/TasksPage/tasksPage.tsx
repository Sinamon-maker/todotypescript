import React, { useEffect, useState } from "react";

import { useParams, useNavigate, useLoaderData } from "react-router-dom";

import { UserContext } from "../../Context/userContext";

import { Header } from "../../Components/Header/header";
import { ContentOfTasks } from "../../Components/ContentOfTasks/contentOfTasks";

import { Task, Process } from "../../globalTypes";

type QuizParams = {
  userId: string;
};

import { removeCurrentUserFromStore } from "../../utils";
import { TaskContext } from "../../Context/taskContext";
import { ModalDelete } from "../ModalDeleteTask/modalDeleteTask";

function TasksPage() {
  const navigate = useNavigate();

  const [logoName, setLogoName] = useState("");

  const loadData = useLoaderData() as Task[] | null;

  const params = useParams<QuizParams>();

  if (!params.userId) return <div>halo</div>;

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      navigate("/login");
    } else {
      setLogoName(user);
    }
  }, []);

  const logout = () => {
    setLogoName("");
    removeCurrentUserFromStore();
    navigate("/");
  };

  return (
    <UserContext.Provider value={logoName}>
      <div className="flex flex-col h-screen">
        <Header handleClick={logout} logoName={logoName} />
        <main className="w-full  m-auto grow bg-cover  bg-no-repeat bg-center bg-hello-pattern ">
          <ContentOfTasks logoName={logoName} loadData={loadData} />
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default TasksPage;
