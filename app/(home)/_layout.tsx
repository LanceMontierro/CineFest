import React from "react";
import {Stack} from "expo-router";
import {StatusBar} from "react-native";

export default function Layout() {
return(
    <>
        <StatusBar hidden={true} />
    <Stack>

        <Stack.Screen
            name="HOME"
            options={{
                headerShown: false,
            }}
        />

    </Stack>
    </>
);
}
