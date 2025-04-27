import "./globals.css";
import { StatusBar } from "react-native";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import InitialLayout from "@/components/initialLayout";
import ContextApi from "./context/appContext";
import { useEffect, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

export default function RootLayout() {
  const publicKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;


  const [orientation, setOrientation] = useState<ScreenOrientation.Orientation | null>(null);

  if (!publicKey) {
    throw new Error("Missing EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY");
  }

  useEffect(() => {

    async function getCurrentOrientation() {
      const orientationInfo = await ScreenOrientation.getOrientationAsync();
      setOrientation(orientationInfo);
    }

    const subscription = ScreenOrientation.addOrientationChangeListener(event => {
      setOrientation(event.orientationInfo.orientation);
      console.log("Orientation changed:", event.orientationInfo.orientation);
    });

    getCurrentOrientation();

    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  return (
      <ClerkProvider publishableKey={publicKey} tokenCache={tokenCache}>
        <ClerkLoaded>
          <ContextApi>
            <StatusBar hidden={true} />
            <InitialLayout/>
          </ContextApi>
        </ClerkLoaded>
      </ClerkProvider>
  );
}
