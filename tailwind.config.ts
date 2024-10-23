import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			dark:{
				1:'#1C1F2E',
				2:'#161925',
				white:'#ffff'
			},
			blue:{
				1:'#0E78F9'
			},
  		},
		backgroundImage:{
			'hero': "url('/images/heroImage.jpg')",
		}
  		
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
