import React from 'react';

import { AppInput } from '../Input/Input';
import { IconComponent } from '../../Icons/Icon';

type Props = {
	searchName: string;
	change: (val: string) => void;
	searchQuery: string;
	iconStyle?: string;
};

const defaultProps = {
	iconStyle: '',
};

export const SearchComponent = ({ searchName, change, searchQuery, iconStyle }: Props) => {
	const handleChange = (e: React.ChangeEvent<EventTarget>) => {
		if (e.target instanceof HTMLInputElement) {
			change(e.target.value);
		}
	};
	return (
		<div className="flex items-center pl-1 border border-fill-weak py-1 rounded-lg">
			<IconComponent Icon="search" style={iconStyle} />
			<AppInput
				style=" bg-transparent border-none w-full min-w-1  text-skin-base  py-1 px-2 leading-tight focus:outline-none"
				type="text"
				nameValue="search"
				value={searchQuery}
				placeholder={searchName}
				ariaLabel="Full name"
				onChange={handleChange}
			/>
		</div>
	);
};

SearchComponent.defaultProps = defaultProps;
