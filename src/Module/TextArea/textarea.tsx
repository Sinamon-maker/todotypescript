import React from "react";

type Props = {
  style: string;
  rows?: number;
  onChange: (e: React.ChangeEvent<EventTarget>) => void;
  value: string;
  id?: string;
};

export const AppTextarea = ({
  style,
  rows = 2,
  onChange,
  value,
  id = "",
}: Props) => {
  return (
    <label>
      <textarea
        className={`${style}`}
        rows={rows}
        id={id}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
