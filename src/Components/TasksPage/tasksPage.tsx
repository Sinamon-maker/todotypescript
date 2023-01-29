import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { UserContext } from "../../Context/userContext";

import { Header } from "../../Components/Header/header";
import { ContentOfTasks } from "../../Components/ContentOfTasks/contentOfTasks";

type QuizParams = {
  userId: string;
};

import { removeCurrentUserFromStore } from "../../utils";

function TasksPage() {
  const navigate = useNavigate();

  const [logoName, setLogoName] = useState("");

  let { userId } = useParams<QuizParams>();
  if (!userId) return null;

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      navigate("/login");
    } else {
      setLogoName(user);
    }
  });

  const logout = () => {
    setLogoName("");
    removeCurrentUserFromStore();
    navigate("/");
  };

  return (
    <UserContext.Provider value={logoName}>
      <div className="flex flex-col h-screen">
        <Header handleClick={logout} logoName={userId} />
        <main className="w-full  m-auto grow bg-cover  bg-no-repeat bg-center bg-hello-pattern ">
          <ContentOfTasks logoName={logoName} />
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default TasksPage;
