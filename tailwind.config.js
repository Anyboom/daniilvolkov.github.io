/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,scss}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#222222",
          darken: "#111111",
        },
        gray: {
          DEFAULT: "#F6F6F6",
          darken: "#EBEBEB",
        },
      },
    },
    fontFamily: {
      main: "Roboto, system-ui, sans-serif",
    },
    container: {
      center: true,
      padding: "1.2rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
      },
    },
  },
  plugins: [],
};
