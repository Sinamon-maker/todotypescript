import React, { useContext } from 'react';

import { AppButton } from '../../../Module/Button/Button';

import { SortParam } from '../../../globalTypes';
import useChangeTaskQueryStore from '../../../store/tasksStore';

export const SortingButtons = () => {
	const sorted = useChangeTaskQueryStore((s) => s.sorted);
	const setSorted = useChangeTaskQueryStore((s) => s.setSorted);

	return (
		<div className="flex gap-2 items-center  pb-1 pt-2 py-2 ssm:pt-4 ssm:pb-2 w-full ssm:w-fit justify-end ">
			<AppButton
				style="flex-shrink-0 border-transparent border-4 bg-fill-weak text-skin-base hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg  disabled:underline disabled:bg-transparent"
				type="button"
				nameValue="allTask"
				title="All"
				disabled={sorted === SortParam.all}
				onClick={() => setSorted(SortParam.all)}
			/>
			<AppButton
				style="flex-shrink-0 border-transparent border-4 bg-fill-weak text-skin-base hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg  disabled:underline disabled:bg-transparent"
				type="button"
				nameValue="doneTask"
				title="Done"
				disabled={sorted === SortParam.done}
				onClick={() => setSorted(SortParam.done)}
			/>

			<AppButton
				style="flex-shrink-0 border-transparent border-4 bg-fill-weak text-skin-base hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg  disabled:underline disabled:bg-transparent"
				type="button"
				nameValue="ongoingTask"
				title="Ongoing"
				disabled={sorted === SortParam.ongoing}
				onClick={() => setSorted(SortParam.ongoing)}
			/>
		</div>
	);
};
