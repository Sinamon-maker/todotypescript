import React from 'react';
import { IconType } from 'react-icons';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

export type MapIcons = { [key: string]: IconType };

const iconMaps: MapIcons = {
	menu: AiOutlineMenu,
	close: AiOutlineClose,
};

type Props = {
	style: string;
	Icon: keyof MapIcons;
};

export const IconComponent = ({ style, Icon }: Props) => {
	const AppIcon: IconType = iconMaps[Icon];
	return <AppIcon className={style} />;
};
