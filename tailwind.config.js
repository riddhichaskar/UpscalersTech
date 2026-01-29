/** @type {import('tailwindcss').Config} */
module.exports = {
  // This line is the "magic switch" that makes your toggle button work
  darkMode: "class",
  
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Added this to scan your Navbar and other components
    "./src/**/*.{js,ts,jsx,tsx}",        // Added as a safety net if you use a src folder
  ],
  theme: {
    extend: {
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(300px)" },
        },
      },
      animation: {
        scan: "scan 2s linear infinite",
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"), // Highly recommended for those "animate-in" classes we used
  ],
};
