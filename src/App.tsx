import React, { useState, useEffect } from "react";
import { KeyboardEvent } from "react";

import { TaskContext, Cont } from "./Context/taskContext";

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

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");

    if (currentUser !== null) {
      setLogoName(currentUser);
      setTasksShow(true);

      const list = findTasks(currentUser);

      if (list !== undefined) {
        setListOfTasks(list);
      }
    }
  }, []);

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

  const onChangeTask = (text: string, id: number) => {
    console.log(text, id);
    const list = findTasks(logoName);

    if (list !== null) {
      const newList = list.map((task) => {
        if (task.created === id) {
          return { status: task.status, created: id, text: text };
        } else {
          return task;
        }
      });
      setListOfTasks(newList);
      saveInStorage(logoName, newList);
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
      localStorage.removeItem("currentUser");
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
    <TaskContext.Provider
      value={{ listOfTasks, onChangeTask, onChangeStatus, onDeleteClick }}
    >
      <div className="flex flex-col h-screen">
        <Header handleClick={handleClick} logoName={logoName} />
        <main className="w-full  m-auto grow bg-cover  bg-no-repeat bg-center bg-hello-pattern ">
          {isTasksShow && (
            <ContentOfTasks
              onNewTask={onNewTask}
              handleChange={handleChange}
              taskName={taskName}
              disableSave={disableSave}
              onPressEnter={onPressEnter}
            />
          )}
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
    </TaskContext.Provider>
  );
}

export default App;
