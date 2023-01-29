import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  style: string;
};

export const FlexContainer = ({ children, style }: Props) => {
  return <div className={`${style}`}> {children}</div>;
};
