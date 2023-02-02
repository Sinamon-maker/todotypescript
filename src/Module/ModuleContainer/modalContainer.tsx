import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const ModalContainer = ({ children }: Props) => {
  return (
    <div className="bg-slate-100/[0.5] absolute bottom-0 left-0 flex justify-center items-center h-screen w-screen ">
      {children}
    </div>
  );
};
