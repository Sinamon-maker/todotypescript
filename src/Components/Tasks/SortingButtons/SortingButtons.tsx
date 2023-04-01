import React, { useContext } from 'react';
import { TaskContext } from '../../../Context/taskContext';
import { AppButton } from '../../../Module/Button/Button';

import { SortParam } from '../../../globalTypes';

export const SortingButtons = () => {
	const { sorting, setSorting } = useContext(TaskContext);

	return (
		<div className="flex gap-2 items-center   py-2 w-full ssm:w-fit justify-end ">
			<AppButton
				style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg disabled:underline"
				type="button"
				nameValue="allTask"
				title="All"
				disabled={sorting === SortParam.all}
				onClick={() => setSorting(SortParam.all)}
			/>
			<AppButton
				style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg  disabled:underline"
				type="button"
				nameValue="doneTask"
				title="Done"
				disabled={sorting === SortParam.done}
				onClick={() => setSorting(SortParam.done)}
			/>

			<AppButton
				style="flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg disabled:underline"
				type="button"
				nameValue="ongoingTask"
				title="Ongoing"
				disabled={sorting === SortParam.ongoing}
				onClick={() => setSorting(SortParam.ongoing)}
			/>
		</div>
	);
};
