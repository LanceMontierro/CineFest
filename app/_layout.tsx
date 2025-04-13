import { Stack } from "expo-router";
import "./globals.css";
import { StatusBar } from "react-native";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
const publicKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout() {
  return (
<<<<<<< HEAD
    <ClerkProvider publishableKey={publicKey} tokenCache={tokenCache}>
=======
      <ClerkProvider publishableKey={publicKey} >
          <ClerkLoaded>
>>>>>>> fd4e4f5483ffd8fcc424a56036293dbe03e5a441
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

<<<<<<< HEAD
          <Stack.Screen
            name="home"
            options={{
              headerShown: false,
            }}
          />
=======
            <Stack.Screen
                name="(auth)/sign-in"
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="(auth)/sign-up"
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="(home)"
                options={{
                    headerShown: false,
                }}
            />
>>>>>>> fd4e4f5483ffd8fcc424a56036293dbe03e5a441
        </Stack>
      </>
    </ClerkProvider>
  );
}
