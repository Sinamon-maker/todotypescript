import React from "react";
type Props = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleChange: (e: React.ChangeEvent<EventTarget>) => void;
    onHandleSubmit: (e: React.FormEvent<EventTarget>) => void;
    userName: string;
    disableLogin: boolean;
    errorName: string;
};
export declare const LoginForm: ({ handleClick, handleChange, onHandleSubmit, userName, disableLogin, errorName, }: Props) => JSX.Element;
export {};
