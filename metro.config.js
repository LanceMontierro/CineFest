const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./app/globals.css" });

if (process.env.EXPO_EXPORT === "true") {
    config.transformer.nativewind = {
        silent: true,         // suppress logs
        disableWatchMode: true,  // <--- THIS prevents the background process
    };
}

module.exports = config;
