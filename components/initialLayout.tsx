import { useAuth } from "@clerk/clerk-react";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

export default function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    const isAuthScreen = segments[0] === "(intro)";

    if (!isSignedIn && !isAuthScreen) {
      router.replace("/(intro)/introstyle");
    } else if (isSignedIn && isAuthScreen) {
      router.replace("/(tabs)");
    }
  }, [isLoaded, isSignedIn, segments]);
  if (!isLoaded) return null;
  return <Stack screenOptions={{ headerShown: false }} />;
}
