import React from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Main from "./Main";
import { ErrorPage } from "./Components/ErrorPage/errorPage";
import { LoginForm } from "./Components/LoginForm/loginForm";
import { RegisterForm } from "./Components/RegisterForm/registerForm";
import TasksPage from "./Components/TasksPage/tasksPage";
import { findTasks } from "./utils";

const func = () => {
  const user = localStorage.getItem("currentUser") as string | null;
  if (user) {
    const destination = `/tasks/${user}`;

    return redirect(`${destination}`);
  }
  return 3;
};

const func2 = () => {
  const user = localStorage.getItem("currentUser") as string;
  const list = findTasks(user);
  return list;
};

export const Root = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    loader: func,
    children: [
      {
        path: "/login",
        element: <LoginForm />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "tasks/:userId",
    element: <TasksPage />,
    errorElement: <ErrorPage />,
    loader: func2,
  },
]);
