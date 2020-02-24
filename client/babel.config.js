module.exports = function(api) {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        loose: true,
        debug: true,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];
  const plugins = [['@babel/plugin-proposal-class-properties', { loose: true }]];
  return {
    presets,
    plugins,
  };
};
