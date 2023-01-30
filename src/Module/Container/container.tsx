import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <div className="w-full sm:w-9 lg:w-3/4 px-1  h-full  m-auto  flex  flex-col items-end sm:items-center items-center">
      {" "}
      {children}
    </div>
  );
};
