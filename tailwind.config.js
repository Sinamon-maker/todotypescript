/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				fill: {
					main: 'var(--fill-color)',
					weak: 'var(--btn-color)',
					strong: 'var(--btnHover-color)',
				},
			},
			textColor: {
				skin: {
					base: 'var(--text-color)',
					weak: 'var(--textWeak-color)',
				},
				fill: {
					weak: 'var(--btn-color)',
					strong: 'var(--btnHover-color)',
				},
			},
			backgroundColor: {
				fill: {
					main: 'var(--fill-color)',
					weak: 'var(--btn-color)',
					strong: 'var(--btnHover-color)',
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
