module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1',
        },
        useBuiltIns: 'usage',
        corejs: '3.6.4',
      },
    ],
    '@babel/typescript',
  ],
  plugins: [
    '@babel/transform-arrow-functions',
    '@babel/plugin-proposal-async-do-expressions',
    '@babel/plugin-proposal-class-static-block',
    require('./src/plugin/reverse'),
    require('./src/plugin/dummy'),
  ],
}
