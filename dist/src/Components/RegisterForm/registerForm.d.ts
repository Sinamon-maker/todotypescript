import React from "react";
type Props = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleChange: (e: React.ChangeEvent<EventTarget>) => void;
    onHandleSubmit: (e: React.FormEvent<EventTarget>) => void;
    userName: string;
    disableRegister: boolean;
    errorName: string;
};
export declare const RegisterForm: ({ handleClick, handleChange, onHandleSubmit, userName, disableRegister, errorName, }: Props) => JSX.Element;
export {};
