import React from 'react';
import { IconComponent } from '../../Icons/Icon';

export const Loader = () => (
	<div className="w-full p-6 flex justify-center">
		<IconComponent Icon="spinner" style=" w-8 h-8 text-skin-base animate-spin" />
	</div>
);
