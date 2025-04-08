module.exports = {
    content: [
      './app/**/*.{js,jsx,ts,tsx}', // Adjust this path based on your project structure
    ],
    theme: {
      extend: {
        colors: {
          primary: '#c65f3e', // Use the CSS variable defined in globals.css
          secondary: '#1e1c2c',
          light: '#c3b8af',
        },
      },
    },
    plugins: [],
  };