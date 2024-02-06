export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-custom-properties": {},
    "postcss-preset-env": {
      autoprefixer: false,
      features: {
        "nesting-rules": true,
      },
    },
  },
};
