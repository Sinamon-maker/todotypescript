import React from 'react';
import { Task } from '../../../globalTypes';
interface Props {
    task: Task;
    valueTask: string;
    id: number;
    onChange: (e: React.ChangeEvent<EventTarget>) => void;
    handleClickChangeTask: (e: React.MouseEvent<HTMLButtonElement>, val: Task) => void;
}
export declare const TextTableElement: ({ task, valueTask, onChange, handleClickChangeTask, id }: Props) => JSX.Element;
export {};
