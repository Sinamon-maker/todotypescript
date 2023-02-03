import React, { useContext } from "react";
import { UserContext } from "../../Context/userContext";

import { AppButton } from "../../Module/Button/button";

type Props = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Header = ({ handleClick }: Props) => {
  const logoName = useContext(UserContext);

  return (
    <header className=" bg-gray-800   ">
      <div className="container bg-gray-800 m-auto  flex flex-col sm:flex-row sm:justify-between sm:items-center py-6 pl-8 pr-8 shadow-lg">
        <p className="mb-4 sm:mb-0 text-slate-100">{logoName}</p>
        <div>
          <AppButton
            style="flex-shrink-0 border-transparent border-4 text-teal-500  hover:text-teal-800 disabled:opacity-25 text-sm py-1 px-2 rounded shadow-lg"
            type="button"
            nameValue="logout"
            onClick={(e) => handleClick(e)}
            title="Log out"
          />
        </div>
      </div>
    </header>
  );
};
