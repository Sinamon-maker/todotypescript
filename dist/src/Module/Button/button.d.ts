import React from 'react';
type Props = {
    title: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    nameValue: string;
    disabled?: boolean;
    style: string;
    ariaLabel?: string;
    Icon?: React.ReactNode;
    onClick?: <T>(e: React.MouseEvent<HTMLButtonElement>, ...args: T[]) => void;
};
export declare const AppButton: {
    ({ title, type, ariaLabel, nameValue, disabled, style, onClick, Icon }: Props): JSX.Element;
    defaultProps: {
        type: string;
        disabled: boolean;
        onClick: () => null;
        Icon: null;
        ariaLabel: string;
    };
};
export {};
