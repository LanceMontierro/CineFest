import { Tabs } from "expo-router";
import {ImageBackground, Image, Text, View, useWindowDimensions} from "react-native";

import { icons } from "@/constansts/icons";
import { images } from "@/constansts/images";

function TabIcon({ focused, icon, title }: any) {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-[50px] mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#D9D9D9" className="size-5" />
        <Text className=" text-[#D9D9D9] text-secondary text-base font-semibold ml-2 ">
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#D9D9D9" className="size-5" />
    </View>
  );
}

export default function TabsLayout() {

    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: isLandscape ? "50%" : "100%",
          height:  isLandscape ? "80%" : "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#000000",
          borderRadius: 50,
          marginHorizontal: 20,
            marginLeft: isLandscape ? 150 : 20,
            marginRight: isLandscape ? 150 : 20,
          marginBottom: isLandscape ? 10 : 60,
          height: isLandscape ? 60 : 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
