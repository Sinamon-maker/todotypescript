export const styles = {
	buttons: {
		main: 'flex-shrink-0 border-transparent border-4 bg-fill-weak text-skin-base hover:text-fill-strong text-sm py-1 px-2 rounded shadow-lg  ',
		active: 'disabled:bg-transparent disabled:underline',
		hide: 'disabled:underline disabled:opacity-25',
		transparent: 'flex-shrink-0 border-transparent border-4 text-fill-weak  hover:text-fill-strong  text-sm py-1 px-2 rounded shadow-lg',
		iconRound:
			'w-6 h-6 sm:w-8 sm:h-8 block  hover:bg-fill-strong  hover:border-fill-strong text-sm   rounded-full shadow-lg flex justify-center items-center disabled:opacity-80 disabled:bg-transparent disabled:border-fill-strong',
		iconBorder: ' border-2 border-fill-weak ',
	},
};

export const styleType = {
	link: styles.buttons.main + styles.buttons.active,
	buttonStyle: styles.buttons.main + styles.buttons.hide,
	transparent: styles.buttons.transparent,
	realLink: styles.buttons.transparent,
	activeRealLink: styles.buttons.transparent + 'underline',
	icon: styles.buttons.iconRound,
	iconWithBorder: styles.buttons.iconRound + styles.buttons.iconBorder,
};
