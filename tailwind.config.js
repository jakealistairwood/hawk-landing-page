module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: (theme) => ({
			maxWidth: "100%",
			center: true,
			padding: {
				DEFAULT: theme("spacing.6"),
				lg: theme("spacing.12"),
			},
		}),
		colors: {
			'hawk-yellow': '#F1F152',
			'hawk-wisdon': '#AFB9B4',
			'hawk-dark-grey': '#69726E',
			'hawk-mid-grey': '#D4DCD8'
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/forms")],
};
