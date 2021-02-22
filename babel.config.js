module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false, // false
        useBuiltIns: 'usage',
        corejs: 3,
        shippedProposals: true,
      },
    ],
  ],
  plugins: [
    // path aliases
    [
      'babel-plugin-module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.cjs', '.mjs', '.ts', '.json'],
        alias: {
          '@': './src',
        },
      },
    ],
    // top-level-await
    ['@babel/plugin-syntax-top-level-await'],
    // re-use helpers
    ['@babel/plugin-transform-runtime'],
  ],
};
