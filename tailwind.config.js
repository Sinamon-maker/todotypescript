/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			borderColor: {
				fill: {
					main: 'rgb(var(--fill-color)/ <alpha-value>)',
					weak: 'rgb(var(--btn-color)/ <alpha-value>)',
					strong: 'rgb(var(--btnHover-color)/ <alpha-value>)',
				},
			},
			textColor: {
				skin: {
					base: 'rgb(var(--text-color)/ <alpha-value>)',
					weak: 'rgb(var(--textWeak-color)/ <alpha-value>)',
				},
				fill: {
					weak: 'rgb(var(--btn-color)/ <alpha-value>)',
					strong: 'rgb(var(--btnHover-color)/ <alpha-value>)',
				},
			},
			backgroundColor: {
				fill: {
					main: 'rgb(var(--fill-color)/ <alpha-value>)',
					weak: 'rgb(var(--btn-color)/ <alpha-value>)',
					strong: 'rgb(var(--btnHover-color)/ <alpha-value>)',
				},
			},
			backgroundImage: {
				'hello-pattern': "url('./images/pramod-tiwari-KXtBffEKYZ4-unsplash.jpg')",
			},
			width: {
				128: '32rem',
				9: '90%',
			},
		},
		container: {
			center: true,
		},
		screens: {
			ssm: '540px',
			sm: '576px',
			// => @media (min-width: 576px) { ... }

			md: '960px',
			// => @media (min-width: 960px) { ... }

			lg: '1440px',
		},
	},
	variants: {
		extend: {
			backgroundColor: ['disabled'],
			textColor: ['disabled'],
		},
	},
	plugins: [],
};
