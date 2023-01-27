import React, { useState } from "react";
import { KeyboardEvent } from "react";

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
} from "./utils";

import { Task, Process, Users } from "./globalTypes";

// import "./app.scss";

enum TypeForm {
  login = "login",
  register = "register",
}

type List = Array<Task>;

function App() {
  const [userName, setUserName] = useState("");
  const [logoName, setLogoName] = useState("");
  const [errorName, setErrorName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [typeForm, setTypeForm] = useState<TypeForm | null>(null);
  const [isTasksShow, setTasksShow] = useState(false);
  const [listOfTasks, setListOfTasks] = useState<List>([]);
  const [disableRegister, setDisableRegister] = useState(true);
  const [disableLogin, setDisableLogin] = useState(true);

  const [disableSave, setDisableSave] = useState(true);

  const onNewTask = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (taskName.length > 2) {
      const newTask = {
        text: taskName,
        status: Process.inprogress,
        created: +new Date(),
      };

      const newList: Array<Task> = [...listOfTasks, newTask];
      setListOfTasks(newList);
      saveInStorage(logoName, newList);
      setTaskName("");
      setDisableSave(false);
    }
  };

  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      onNewTask(e);
    }
  };

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
      if (e.target.name === "task") {
        setTaskName(e.target.value);
        if (e.target.value.length > 2) {
          setDisableSave(false);
        }
        if (e.target.value.length < 3) {
          setDisableSave(true);
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
    }
  };

  const onDeleteClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    created: number
  ) => {
    const newTaskList: Task[] = listOfTasks.filter(
      (task: Task) => task.created !== created
    );
    saveInStorage(logoName, newTaskList);
    setListOfTasks(newTaskList);
  };
  const onChangeStatus = (
    e: React.MouseEvent<HTMLButtonElement>,
    stat: string,
    id: number
  ) => {
    const newTaskList = listOfTasks.map((task) => {
      if (task.created !== id) return task;
      else {
        task.status === Process.inprogress;
        return { text: task.text, created: task.created, status: Process.done };
      }
    });

    setListOfTasks(newTaskList);
    saveInStorage(logoName, newTaskList);
  };

  const onLogin = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();

    const user = findUser(userName);

    if (user) {
      setTypeForm(null);
      const list: Array<Task> = findTasks(userName);
      setListOfTasks([...list]);
      setTasksShow(true);
      setLogoName(userName);
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
      setUserName("");
      setTasksShow(true);
      setDisableRegister(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header handleClick={handleClick} logoName={logoName} />
      <main className="w-full  m-auto grow ">
        {isTasksShow && (
          <ContentOfTasks
            onNewTask={onNewTask}
            handleChange={handleChange}
            taskName={taskName}
            listOfTasks={listOfTasks}
            onDeleteClick={onDeleteClick}
            disableSave={disableSave}
            onPressEnter={onPressEnter}
            onChangeStatus={onChangeStatus}
          />
        )}
        {!isTasksShow && <HelloImage />}
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
      </main>
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
  );
}

export default App;
