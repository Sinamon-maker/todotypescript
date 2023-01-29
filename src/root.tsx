import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main";
import { ErrorPage } from "./Components/ErrorPage/errorPage";
import { LoginForm } from "./Components/LoginForm/loginForm";
import { RegisterForm } from "./Components/RegisterForm/registerForm";
import TasksPage from "./Components/TasksPage/tasksPage";

export const Root = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
  },
]);
