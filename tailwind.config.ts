import type { Config } from "tailwindcss";
const {withUt} = require("uploadthing/tw")

const config = withUt({  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [require("daisyui")],
}) satisfies Config


export default config;