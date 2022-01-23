module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@application": ["./src/application"],
            "@assets": ["./assets"],
            "@core-kits": ["./src/core-kits"],
            "@features": ["./src/features"],
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
