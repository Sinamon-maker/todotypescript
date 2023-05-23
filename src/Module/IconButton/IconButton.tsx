import React from 'react';
import { IconComponent, MapIcons } from '../../Icons/Icon';

type Props = {
	style?: string;
	Icon: keyof MapIcons;
	onClick?: <T>(e: React.MouseEvent<HTMLButtonElement>, ...args: T[]) => void;
	ariaLabel: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
	disabled?: boolean;
	styleBtn?: string;
};

const defaultProps = {
	type: 'button',
	disabled: false,
	onClick: () => null,
	ariaLabel: '',
	style: '',
	styleBtnb: '',
};

export const IconButton = ({ styleBtn, type, ariaLabel, disabled, style, onClick, Icon }: Props) => {
	return (
		<button className={`${styleBtn}`} aria-label={ariaLabel} type={type} disabled={disabled} onClick={onClick}>
			<IconComponent style={style ? style : ''} Icon={Icon} />
		</button>
	);
};

IconButton.defaultProps = defaultProps;
