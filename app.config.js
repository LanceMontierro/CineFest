import "dotenv/config";

export default {
  expo: {
    name: "CineFest",
    slug: "CineFest",
    version: "1.0.0",
    icon: "./assets/images/logo2.png",
    backgroundColor: "#000000",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    extra: {
      EXPO_PUBLIC_API_URL: process.env.EXPO_PUBLIC_API_URL,
      eas: {
        projectId: "4ddbe88f-b803-4d95-953c-cdda7eca82af",
      },
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/logo2.png",
        imageWidth: 90,
        width: 90,
        backgroundColor: "#000000",
      },
      package: "com.waitlangparr.CineFest",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      "expo-font",
      "expo-secure-store",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/logo2.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#000000",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
  },
};
