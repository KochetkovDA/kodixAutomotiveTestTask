module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        targets: {
          esmodules: true,
          browsers: ['> 1%', 'last 2 versions'],
        },
      },
    ],
    ['@vue/babel-preset-jsx', { injectH: false }],
  ],
};
