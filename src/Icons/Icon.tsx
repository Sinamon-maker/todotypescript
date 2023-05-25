import React from 'react';
import { IconType } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose, AiFillFolder, AiFillFolderOpen, AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { BiExpandVertical } from 'react-icons/bi';
import { ImSpinner6 } from 'react-icons/im';

export type MapIcons = { [key: string]: IconType };

const iconMaps: MapIcons = {
	menu: AiOutlineMenu,
	close: AiOutlineClose,
	folder: AiFillFolder,
	openFolder: AiFillFolderOpen,
	edit: AiOutlineEdit,
	delete: FiTrash2,
	done: AiOutlineCheck,
	expand: BiExpandVertical,
	spinner: ImSpinner6,
};

type Props = {
	style?: string;
	Icon: keyof MapIcons;
};
const defaultProps = {
	style: '',
};

export const IconComponent = ({ style, Icon }: Props) => {
	const AppIcon: IconType = iconMaps[Icon];
	return <AppIcon className={style} />;
};

IconComponent.defaultProps = defaultProps;
