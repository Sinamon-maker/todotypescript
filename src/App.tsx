import React, { useState, useEffect } from "react";
import { KeyboardEvent } from "react";

import { UserContext, ContextUser } from "./Context/userContext";

import { Header } from "./Components/Header/header";
import { ContentOfTasks } from "./Components/ContentOfTasks/contentOfTasks";
import { LoginForm } from "./Components/LoginForm/loginForm";
import { RegisterForm } from "./Components/RegisterForm/registerForm";
import { HelloImage } from "./Components/HelloImage/helloImage";

import {
  findUser,
  findTasks,
  saveInStorage,
  addNewUserToStorage,
  setCurrentUserToStore,
} from "./utils";

import { Task, Process, Users } from "./globalTypes";

// import "./app.scss";

enum TypeForm {
  login = "login",
  register = "register",
}

function App() {
  const [userName, setUserName] = useState("");
  const [logoName, setLogoName] = useState("");
  const [errorName, setErrorName] = useState("");
  const [typeForm, setTypeForm] = useState<TypeForm | null>(null);
  const [isTasksShow, setTasksShow] = useState(false);
  const [disableRegister, setDisableRegister] = useState(true);
  const [disableLogin, setDisableLogin] = useState(true);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser !== null) {
      setLogoName(currentUser);
      setTasksShow(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      if (e.target.name === "login") {
        setErrorName("");
        const newValue = e.target.value;
        setUserName(newValue);

        if (e.target.value.length > 2) {
          setDisableLogin(false);
        }
        if (e.target.value.length < 3) {
          setDisableLogin(true);
        }
      }
      if (e.target.name === "register") {
        setErrorName("");
        const newValue = e.target.value;
        setUserName(newValue);
        if (e.target.value.length > 2) {
          setDisableRegister(false);
        }
        if (e.target.value.length < 3) {
          setDisableRegister(true);
        }
      }
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === "cansel") {
      setUserName("");
      setErrorName("");
      setTypeForm(null);
    }
    if (e.currentTarget.name === "login") {
      setTypeForm(TypeForm.login);
    }
    if (e.currentTarget.name === "register") {
      setTypeForm(TypeForm.register);
    }
    if (e.currentTarget.name === "logout") {
      setTasksShow(false);
      setLogoName("");
      localStorage.removeItem("currentUser");
    }
  };

  const onLogin = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();

    const user = findUser(userName);

    if (user) {
      setTypeForm(null);
      const list: Array<Task> = findTasks(userName);
      setTasksShow(true);
      setLogoName(userName);
      setCurrentUserToStore(userName);
      setUserName("");
      setDisableLogin(false);
    } else {
      const error = "No such user found. Try again.";
      setErrorName(error);
    }
  };

  const onRegister = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    const user = findUser(userName);
    if (user) {
      const error = "User with this name also exists try another name";
      setErrorName(error);
    } else {
      setTypeForm(null);
      addNewUserToStorage(userName);
      setLogoName(userName);
      setCurrentUserToStore(userName);
      setUserName("");
      setTasksShow(true);
      setDisableRegister(false);
    }
  };

  return (
    <UserContext.Provider value={logoName}>
      <div className="flex flex-col h-screen">
        <Header handleClick={handleClick} logoName={logoName} />
        <main className="w-full  m-auto grow bg-cover  bg-no-repeat bg-center bg-hello-pattern ">
          {isTasksShow && <ContentOfTasks logoName={logoName} />}
          {!isTasksShow && <HelloImage />}
        </main>
        {typeForm === "login" && (
          <LoginForm
            handleClick={handleClick}
            handleChange={handleChange}
            onHandleSubmit={onLogin}
            userName={userName}
            disableLogin={disableLogin}
            errorName={errorName}
          />
        )}
        {typeForm === "register" && (
          <RegisterForm
            handleClick={handleClick}
            handleChange={handleChange}
            onHandleSubmit={onRegister}
            userName={userName}
            disableRegister={disableRegister}
            errorName={errorName}
          />
        )}{" "}
      </div>
    </UserContext.Provider>
  );
}

export default App;
