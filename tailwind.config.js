/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
	theme: {
		screens: {
			sm: "600px",
			md: "900px",
			lg: "1088px",
			xl: "1440px",
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
