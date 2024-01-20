/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "tw-",
  theme: {
    extend: {
      gridTemplateRows: {
        mainLayoutGrid: "50px 1fr",
        mainGrid: "1fr max-content",
      },
      height: {
        runDetails: "calc(100vh - 50px)",
      },
    },
  },
  plugins: [],
};
