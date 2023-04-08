import React from 'react';

import { Task } from '../../../../globalTypes';

interface Props {
	task: Task;
}

export const TextTableElement = ({ task }: Props) => {
	const doneStyle = task.status ? 'line-through' : '';

	return <span className={`grow h-full py-2 text-left font-normal  relative   ${doneStyle}`}>{task.text}</span>;
};
