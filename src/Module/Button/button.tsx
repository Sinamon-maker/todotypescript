import React from "react";

type Props = {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  nameValue: string;
  disabled?: boolean;
  style: string;
  onClick?: <T>(e: React.MouseEvent<HTMLButtonElement>, ...args: T[]) => void;
};

export const AppButton = ({
  title,
  type = "button",
  nameValue,
  disabled = false,
  style,
  onClick,
}: Props) => {
  return (
    <button
      className={`${style}`}
      type={type}
      name={nameValue}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
