import React from 'react';

import { Data } from '../../../globalTypes';
import { AppButton } from '../../../Module/Button/Button';
import { Container } from '../../../Module/Container/Container';
import { styleType } from '../../../styles/styles';

type Props = {
	resultData: Data;
};
export const CatalogeHeading = ({ resultData }: Props) => {
	const delCatalodue = () => {
		console.log('del catalogue');
	};

	return (
		<Container>
			<div className="w-full flex justify-between my-2 text-skin-base">
				<h3 className=" italic text-fill-weak  px-2 py-1">{resultData.title}</h3>

				<AppButton style={styleType.buttonStyle} nameValue="deleteCataloge" title="Delete cataloge" onClick={delCatalodue} />
			</div>
		</Container>
	);
};
