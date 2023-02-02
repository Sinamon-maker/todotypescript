import React from "react";

type Props = {
  style: string;
  type?: string;
  nameValue?: string;
  value: string;
  placeholder?: string;
  ariaLabel?: string;
  autoFocus?: React.HTMLAttributeAnchorTarget;
  onChange: (e: React.ChangeEvent<EventTarget>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const AppInput = ({
  style,
  type = "text",
  nameValue = "",
  value,
  placeholder,
  onChange,
  ariaLabel = "",
  onKeyDown,
}: Props) => {
  return (
    <label>
      <input
        className={`${style}`}
        type={type}
        name={nameValue}
        value={value}
        aria-label={ariaLabel}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </label>
  );
};
