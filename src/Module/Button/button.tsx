import React from "react";

type Props = {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  nameValue: string;
  disabled?: boolean;
  style: string;
  Icon?: React.ReactNode;
  onClick?: <T>(e: React.MouseEvent<HTMLButtonElement>, ...args: T[]) => void;
};

export const AppButton = ({
  title,
  type = "button",
  nameValue,
  disabled = false,
  style,
  onClick,
  Icon,
}: Props) => {
  if (Icon) {
    return (
      <button
        className={`${style}`}
        type={type}
        name={nameValue}
        disabled={disabled}
        onClick={onClick}
      >
        {Icon}
      </button>
    );
  }
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
