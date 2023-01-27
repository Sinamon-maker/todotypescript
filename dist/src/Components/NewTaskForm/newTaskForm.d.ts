import React from "react";
type Props = {
    onNewTask: (e: React.FormEvent<EventTarget>) => void;
    handleChange: (e: React.ChangeEvent<EventTarget>) => void;
    taskName: string;
    disableSave: boolean;
    onPressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};
export declare const NewTaskForm: ({ onNewTask, taskName, handleChange, onPressEnter, disableSave, }: Props) => JSX.Element;
export {};
