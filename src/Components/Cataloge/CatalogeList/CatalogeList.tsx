import React, { useContext } from 'react';
import { UserContext } from '../../../Context/userContext';
import { Data } from '../../../globalTypes';
import { Container } from '../../../Module/Container/Container';
import { CatalogueItem } from '../CatalogueItem/CatalogurItem';

type Props = {
	documents: Data[];
};

export const CatalogeList = ({ documents }: Props) => {
	const { logoName } = useContext(UserContext);
	return (
		<div className=" grow overflow-y-auto scroll-smooth">
			<Container>
				<div className="w-full flex  flex-col gap-4">
					{documents?.map((docum) => (
						<CatalogueItem key={docum.id} docum={docum} logoName={logoName} />
					))}
				</div>
			</Container>
		</div>
	);
};
