import React from "react";
import { ModalContainer } from "../../Module/ModuleContainer/modalContainer";
import { Error } from "../Error/error";

type Props = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleChange: (e: React.ChangeEvent<EventTarget>) => void;
  onHandleSubmit: (e: React.FormEvent<EventTarget>) => void;
  userName: string;
  disableLogin: boolean;
  errorName: string;
};

export const LoginForm = ({
  handleClick,
  handleChange,
  onHandleSubmit,
  userName,
  disableLogin,
  errorName,
}: Props) => {
  return (
    <ModalContainer>
      <form
        onSubmit={onHandleSubmit}
        className="w-full max-w-sm bg-gray-800 rounded p-10 pb-8 shadow-lg"
        name="onLogin"
      >
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-400 text-slate-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="login"
            value={userName}
            placeholder="Jane Doe"
            aria-label="Full name"
            onChange={handleChange}
          />

          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 disabled:opacity-25 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 roundedshadow-lg"
            type="submit"
            name="loginUser"
            disabled={disableLogin}
          >
            Log In
          </button>
          <button
            className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded shadow-lg"
            type="button"
            name="cansel"
            onClick={(e) => handleClick(e)}
          >
            Cansel
          </button>
        </div>
        <Error message={errorName} />
      </form>
    </ModalContainer>
  );
};
