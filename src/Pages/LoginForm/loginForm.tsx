import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Error } from "../../Components/Error/error";
import { AppInput } from "../../Module/Input/input";
import { AppButton } from "../../Module/Button/button";

import { findUser, setCurrentUserToStore } from "../../utils";

type Props = {};

export const LoginForm = ({}: Props) => {
  const [userName, setUserName] = useState("");
  const [errorName, setErrorName] = useState("");
  const [disableLogin, setDisableLogin] = useState(true);

  const navigate = useNavigate();

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
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === "cansel") {
      setUserName("");
      setErrorName("");
      navigate("/");
    }
  };

  const onLogin = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();

    const user = findUser(userName);

    if (user) {
      setCurrentUserToStore(userName);
      setUserName("");
      setDisableLogin(false);

      const destination = `/tasks/${user}`;

      navigate(`${destination}`, { replace: true });
    } else {
      const error = "No such user found. Try again.";
      setErrorName(error);
    }
  };

  return (
    <div className="w-128">
      <form
        onSubmit={onLogin}
        className="w-full max-w-md m-auto bg-gray-800/75 rounded p-10 pb-8 shadow-lg"
        name="onLogin"
      >
        <div className="flex items-center border-b border-teal-500 py-2">
          <AppInput
            style="appearance-none bg-transparent border-none w-full text-gray-400 text-slate-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            nameValue="login"
            value={userName}
            placeholder="Jane Doe"
            ariaLabel="Full name"
            onChange={handleChange}
          />

          <AppButton
            style="flex-shrink-0 bg-teal-500 hover:bg-teal-700 disabled:opacity-25 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 roundedshadow-lg"
            type="submit"
            nameValue="loginUser"
            disabled={disableLogin}
            title="Log In"
          />

          <AppButton
            style="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded shadow-lg"
            nameValue="cansel"
            title="Cansel"
            onClick={(e) => handleClick(e)}
          />
        </div>
        <Error message={errorName} />
      </form>
    </div>
  );
};
