import React, { useState, useContext } from 'react';
import { TaskContext } from '../../Context/TaskContext';
import { AppButton } from '../../Module/Button/Button';

import { SortParam } from '../../globalTypes';

export const SortingButtons = () => {
	const { sorting, setSorting } = useContext(TaskContext);

	return (
		<div className="flex gap-2 items-center   py-2 w-full ssm:w-fit justify-end ">
			<AppButton
				style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg disabled:opacity-25"
				type="button"
				nameValue="allTask"
				title="All"
				disabled={sorting === SortParam.all}
				onClick={(e: React.MouseEvent<HTMLButtonElement>) => setSorting(SortParam.all)}
			/>
			<AppButton
				style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg disabled:opacity-25"
				type="button"
				nameValue="doneTask"
				title="Done"
				disabled={sorting === SortParam.done}
				onClick={(e: React.MouseEvent<HTMLButtonElement>) => setSorting(SortParam.done)}
			/>

			<AppButton
				style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg disabled:opacity-25"
				type="button"
				nameValue="ongoingTask"
				title="Ongoing"
				disabled={sorting === SortParam.ongoing}
				onClick={(e: React.MouseEvent<HTMLButtonElement>) => setSorting(SortParam.ongoing)}
			/>
		</div>
	);
};
