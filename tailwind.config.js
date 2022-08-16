/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Hlight: ["Hlight", "sans-serif"],
				Hmid: ["Hmid", "sans-serif"],
				Hbold: ["Hbold", "sans-serif"],
				Hblack: ["Hblack", "sans-serif"],
			},
			colors: {
				primary: "#1c1f22",
				secondary: "#757778",
				btn: "#fff",
			},
		},
	},
	plugins: [],
};
