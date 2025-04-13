import React from "react";
import Homestyle from "@/app/(home)/homestyle";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Page() {
  return (
    <GestureHandlerRootView className="flex-1">
      <Homestyle />
    </GestureHandlerRootView>
  );
}
