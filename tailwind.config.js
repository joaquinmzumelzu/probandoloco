/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#13082a",
        "iris-80": "#7879f1",
        white: "#fff",
        "iris-100": "#5d5fef",
        ffffff: "rgba(255, 255, 255, 0.1)",
        "iris-60": "#a5a6f6",
        plum: "#9f8fc1",
        midnightblue: {
          "100": "#2c2a84",
          "200": "rgba(55, 42, 132, 0.72)",
        },
      },
      fontFamily: {
        poppins: "Poppins",
        "radio-canada": "'Radio Canada'",
      },
      borderRadius: {
        "13xl": "32px",
        "5xl-8": "24.8px",
        "mid-3": "17.3px",
      },
    },
    fontSize: {
      lg: "18px",
      xl: "20px",
      "smi-4": "12.4px",
      "mid-4": "17.4px",
      "33xl-3": "52.3px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
