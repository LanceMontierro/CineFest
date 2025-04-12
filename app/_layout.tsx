import { Stack } from "expo-router";
import "./globals.css"
import { StatusBar } from "react-native";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";

const publicKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout() {
  return (
      <ClerkProvider publishableKey={publicKey} >
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
                name="auth"
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="home"
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