import React from 'react';
import { Task } from '../../../globalTypes';
type Props = {
    task: Task;
    editClick: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
    onChangeStatus: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
    delClick: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
};
export declare const ActionsTableElement: ({ task, onChangeStatus, delClick, editClick }: Props) => JSX.Element;
export {};
