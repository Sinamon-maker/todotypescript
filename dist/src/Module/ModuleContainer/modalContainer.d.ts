import { ReactNode } from 'react';
type Props = {
    children: ReactNode;
    close: () => void;
};
export declare const ModalContainer: ({ children, close }: Props) => JSX.Element;
export {};
