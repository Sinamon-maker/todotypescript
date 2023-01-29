import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppButton } from "../../Module/Button/button";
import {
  findUser,
  setCurrentUserToStore,
  addNewUserToStorage,
} from "../../utils";
import { Error } from "../Error/error";

type Props = {};

export const RegisterForm = ({}: Props) => {
  const [userName, setUserName] = useState("");
  const [errorName, setErrorName] = useState("");

  const navigate = useNavigate();

  const [disableRegister, setDisableRegister] = useState(true);

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
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

      navigate("/");
    }
  };

  const onRegister = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    const user = findUser(userName);
    if (user) {
      const error = "User with this name also exists try another name";
      setErrorName(error);
    } else {
      const userId = userName;
      addNewUserToStorage(userName);

      setCurrentUserToStore(userName);
      setUserName("");

      setDisableRegister(false);
      console.log("new user", userId);
      const destination = `/tasks/${userId}`;

      navigate(`${destination}`);
    }
  };

  return (
    <div className="w-128">
      <form
        onSubmit={onRegister}
        className="w-full max-w-md m-auto bg-gray-800/75 rounded p-10 pb-8 shadow-lg"
        name="onRegister"
      >
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-400 text-slate-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="register"
            value={userName}
            placeholder="Jane Doe"
            aria-label="Full name"
            onChange={handleChange}
          />

          <AppButton
            style="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 disabled:opacity-25 text-sm border-4 text-white py-1 px-2 rounded shadow-lg"
            nameValue="registerUser"
            type="submit"
            disabled={disableRegister}
            title="Save"
          />

          <AppButton
            style="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded shadow-lg"
            type="button"
            nameValue="cansel"
            onClick={(e) => handleClick(e)}
            title="Cansel"
          />
        </div>
        {{ errorName } && <Error message={errorName} />}
      </form>
    </div>
  );
};
