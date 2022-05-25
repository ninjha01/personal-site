module.exports = function override(config, env) {
  config.resolve = {
    extensions: [".ts", ".tsx", ".js"],
  };
  return config;
};
