import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <div className="container  h-full  m-auto  flex  flex-col items-center">
      {" "}
      {children}
    </div>
  );
};
