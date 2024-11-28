const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
  };
  interface TransformerConfig {
    babelTransformerPath: string;
  }

  interface ResolverConfig {
    assetExts: string[];
    sourceExts: string[];
  }

  interface MetroConfig {
    transformer: TransformerConfig;
    resolver: ResolverConfig;
  }

  module.exports = (() => {
    const config: MetroConfig = getDefaultConfig(__dirname);

    const { transformer, resolver } = config;

    config.transformer = {
      ...transformer,
      babelTransformerPath: require.resolve(
        "react-native-svg-transformer/expo"
      ),
    };

    config.resolver = {
      ...resolver,
      assetExts: resolver.assetExts.filter((ext: string) => ext !== "svg"),
      sourceExts: [...resolver.sourceExts, "svg"],
    };

    return config;
  })();

  return config;
})();
