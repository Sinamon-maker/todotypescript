import React, { ReactNode } from "react";

type Props = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;

  logoName: string | "";
};

export const Header = ({
  handleClick,

  logoName = "",
}: Props) => {
  return (
    <header className=" bg-gray-800   ">
      <div className="container bg-gray-800 m-auto  flex flex-col sm:flex-row sm:justify-between sm:items-center py-6 pl-8 pr-8 ">
        <p className="mb-4 sm:mb-0 text-slate-100">{logoName}</p>
        <div>
          {logoName === "" && (
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 disabled:opacity-25 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded shadow-lg"
              type="button"
              name="login"
              onClick={(e) => handleClick(e)}
            >
              Log In
            </button>
          )}
          {logoName === "" && (
            <button
              className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 disabled:opacity-25 text-sm py-1 px-2 rounded shadow-lg"
              type="button"
              name="register"
              onClick={(e) => handleClick(e)}
            >
              Register
            </button>
          )}
          {logoName !== "" && (
            <button
              className="flex-shrink-0 border-transparent border-4 text-teal-500  hover:text-teal-800 disabled:opacity-25 text-sm py-1 px-2 rounded shadow-lg"
              type="button"
              name="logout"
              onClick={(e) => handleClick(e)}
            >
              Log out
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
