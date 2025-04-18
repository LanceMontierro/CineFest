import { Stack } from "expo-router";
import "./globals.css";
import { StatusBar } from "react-native";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import InitialLayout from "@/components/initialLayout";
import ContextApi from "./context/appContext";

export default function RootLayout() {
  const publicKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publicKey) {
    throw new Error("Missing EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY");
  }

  return (
    <ClerkProvider publishableKey={publicKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <>
          <ContextApi>
            <StatusBar hidden={true} />
            <InitialLayout />
          </ContextApi>
        </>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
