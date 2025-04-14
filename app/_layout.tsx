import { Stack } from "expo-router";
import "./globals.css";
import { StatusBar } from "react-native";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

export default function RootLayout() {
  const publicKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  console.log(publicKey);
  if (!publicKey) {
    throw new Error("Missing EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY");
  }

  return (
    <ClerkProvider publishableKey={publicKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <>
          <StatusBar hidden={true} />

          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="movie/[id]"
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="(intro)/introstyle"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
