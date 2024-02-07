export default {
  plugins: {
    cssnano: {
      plugins: [
        [
          '@fullhuman/postcss-purgecss',
          {
            content: ['./src/**/*.tsx'],
          },
        ],
        ['tailwindcss', {}],
        ['autoprefixer', {}],
        ['postcss-custom-properties', {}],
        [
          'postcss-preset-env',
          {
            autoprefixer: false,
            features: {
              'nesting-rules': true,
            },
          },
        ],
      ],
    },
  },
}
