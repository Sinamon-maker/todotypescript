/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hello-pattern":
          "url('./images/pramod-tiwari-KXtBffEKYZ4-unsplash.jpg')",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
