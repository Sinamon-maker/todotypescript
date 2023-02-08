import React from 'react';
import { Task } from '../../../globalTypes';
type Props = {
    task: Task;
    id: number;
    onChangeStatus: (e: React.MouseEvent<HTMLButtonElement>, val: number, val2: string) => void;
    delClick: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
    onClickCanselEditTask: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onSaveEditTask: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export declare const ActionsTableElement: ({ task, id, onChangeStatus, delClick, onClickCanselEditTask, onSaveEditTask }: Props) => JSX.Element;
export {};
