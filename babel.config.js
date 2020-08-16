module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 8', 'ie >= 11'],
        },
      },
    ],
  ],
};
