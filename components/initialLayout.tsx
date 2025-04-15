import { useAuth } from "@clerk/clerk-react";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { useAppContext } from "@/app/context/appContext";
export default function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const { user } = useAppContext();

  useEffect(() => {
    if (!isLoaded) return;

    const isAuthScreen = segments[0] === "(intro)";

    if (!isSignedIn && !isAuthScreen) {
      router.replace("/animationscreen/animation");
    } else if (isSignedIn && isAuthScreen) {
      const role = user?.publicMetadata?.role;

      if (role === "admin") {
        router.replace("/SAdmin");
      } else {
        router.replace("/(tabs)");
      }

      console.log(role);
    }
  }, [isLoaded, isSignedIn, segments]);
  if (!isLoaded) return null;
  return <Stack screenOptions={{ headerShown: false }} />;
}
