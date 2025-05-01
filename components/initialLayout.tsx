import { useAuth } from "@clerk/clerk-react";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { useAppContext } from "@/app/context/appContext";
import { useWindowDimensions } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

export default function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const { user } = useAppContext();

  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;


  const [orientation, setOrientation] = useState<ScreenOrientation.Orientation | null>(null);

  useEffect(() => {
    async function getOrientation() {
      const currentOrientation = await ScreenOrientation.getOrientationAsync();
      setOrientation(currentOrientation);
    }

    getOrientation();

    const subscription = ScreenOrientation.addOrientationChangeListener(event => {
      setOrientation(event.orientationInfo.orientation);
    });

    return () => {

      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

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

  return (
      <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: isPortrait ? "#f0f8ff" : "#ffe4e1",
            },
          }}
      />
  );
}
