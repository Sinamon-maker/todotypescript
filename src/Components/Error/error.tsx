import React from "react";

type Props = {
  message: string;
};

export const Error = ({ message = "" }: Props) => {
  return <p className="h-20 py-4 pt-2 px-2 text-red-400">{message}</p>;
};
