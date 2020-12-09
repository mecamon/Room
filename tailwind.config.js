module.exports = {
	purge: ['./src/**/*.js', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				main: ['Spartan'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
