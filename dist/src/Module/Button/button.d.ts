import React from "react";
type Props = {
    title: string;
    type?: "button" | "submit" | "reset" | undefined;
    nameValue: string;
    disabled?: boolean;
    style: string;
    onClick?: <T>(e: React.MouseEvent<HTMLButtonElement>, ...args: T[]) => void;
};
export declare const AppButton: ({ title, type, nameValue, disabled, style, onClick, }: Props) => JSX.Element;
export {};
