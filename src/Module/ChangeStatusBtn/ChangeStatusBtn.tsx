import React from 'react';

import ImageDone from '../../Images/check.svg';

import { Task } from '../../globalTypes';
import { AppButton } from '../Button/Button';

type Props = {
	task: Task;
	onChangeStatus: (e: React.MouseEvent<HTMLButtonElement>, val: number) => void;
};

export const ChangeStatusbtn = ({ task, onChangeStatus }: Props) => {
	return (
		<>
			{task.status ? (
				<AppButton
					style="block flex justify-center items-center shrink-0 w-6 h-6 sm:w-8 sm:h-8  border-2 border-fill-weak  hover:bg-fill-strong  hover:border-fill-strong text-sm border-4  rounded-full shadow-lg  disabled:opacity-80 disabled:bg-transparent disabled:border-fill-strong"
					nameValue="inProcess"
					onClick={(e) => onChangeStatus(e, task.created)}
					title=""
					ariaLabel="changeStatus"
					Icon={<ImageDone className="w-4 h-4 sm:w-10 sm:h-10" />}
				/>
			) : (
				<AppButton
					style=" block flex justify-center items-center shrink-0 w-6 h-6 sm:w-8 sm:h-8  border-2 border-fill-weak disabled:opacity-5  hover:bg-fill-strong border-fill-weak hover:border-fill-strong text-sm border-4  p-px sm:py-1 sm:px-2 rounded-full shadow-lg  "
					nameValue="inProcess"
					onClick={(e) => onChangeStatus(e, task.created)}
					title=""
					ariaLabel="changeStatus"
				/>
			)}
		</>
	);
};
