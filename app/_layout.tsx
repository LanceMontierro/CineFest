import { Stack } from "expo-router";
import "./globals.css"
import { StatusBar } from "react-native";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Slot } from 'expo-router'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

export default function RootLayout() {
  return (
      <ClerkProvider tokenCache={tokenCache}>
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
        </Stack>
      </>

          </ClerkLoaded>
      </ClerkProvider>
  );
}