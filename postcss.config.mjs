const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        container: {
          center: true,
          padding: {
            DEFAULT: "0.5rem",
            sm: "0.5rem",
            mm: "1rem",
            mt: "4rem",
            md: "5rem",
          },
        },
      },
    },
  },
};

export default config;
