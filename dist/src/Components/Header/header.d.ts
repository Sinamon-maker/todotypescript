import React from "react";
type Props = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    logoName: string | "";
};
export declare const Header: ({ handleClick, logoName, }: Props) => JSX.Element;
export {};
