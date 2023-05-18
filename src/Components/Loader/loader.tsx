import React from 'react';
import { Container } from '../../Module/Container/Container';

export const Loader = () => (
	<Container>
		<div className="w-32 h-32 p-6 rounded-full flex justify-center border-l-8 border-b-8  border-r-8  border-fill-weak bg-fill-main animate-spin bg-red items-center  p-4 mx-auto my-10 text-center"></div>
	</Container>
);
