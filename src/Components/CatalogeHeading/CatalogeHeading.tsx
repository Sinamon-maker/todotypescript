import React from 'react';
import { Data } from '../../globalTypes';
import { AppButton } from '../../Module/Button/Button';

type Props = {
	resultData: Data | null;
};
export const CatalogeHeading = ({ resultData }: Props) => {
	if (!resultData) return <div>No such Cataloge</div>;
	return (
		<div className="w-full flex justify-between my-2 text-skin-base">
			<h3 className=" grow text-center  px-2 py-1">{resultData.title}</h3>

			<AppButton
				style=" self-center flex-shrink-0 border-transparent border-4 text-fill-weak hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg disabled:opacity-25"
				nameValue="deleteCataloge"
				title="Delete cataloge"
			/>
		</div>
	);
};
