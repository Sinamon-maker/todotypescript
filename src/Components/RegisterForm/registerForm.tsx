import React from "react";
import { AppButton } from "../../Module/Button/button";
import { ModalContainer } from "../../Module/ModuleContainer/modalContainer";
import { Error } from "../Error/error";

type Props = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleChange: (e: React.ChangeEvent<EventTarget>) => void;
  onHandleSubmit: (e: React.FormEvent<EventTarget>) => void;
  userName: string;
  disableRegister: boolean;
  errorName: string;
};

export const RegisterForm = ({
  handleClick,
  handleChange,
  onHandleSubmit,
  userName,
  disableRegister,
  errorName,
}: Props) => {
  return (
    <ModalContainer>
      <form
        onSubmit={onHandleSubmit}
        className="w-full max-w-sm bg-gray-800 rounded p-10 pb-8 shadow-lg"
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
    </ModalContainer>
  );
};
