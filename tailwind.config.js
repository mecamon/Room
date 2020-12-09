module.exports = {
	purge: ['./src/**/*.js', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: theme => ({
				'chair-img': "url('/src/assets/desktop-image-hero-1.jpg')",
				'dark-chairs': "url('/src/assets/image-about-dark.jpg')",
				'white-chair': "url('/src/assets/image-about-light.jpg')",
			}),
			fontFamily: {
				main: ['Spartan'],
			},
			letterSpacing: {
				wider: '0.30em',
				widest: '0.5em',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
