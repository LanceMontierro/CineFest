import { Tabs } from "expo-router";
import {ImageBackground, Image, Text, View, useWindowDimensions} from "react-native";

import { icons } from "@/constansts/icons";
import { images } from "@/constansts/images";
import {BlurView} from "expo-blur";


function TabIcon({ focused, icon, title }: any) {

    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

  if (focused) {
    return (
      <ImageBackground
          className={`${
              isLandscape
                  ? "bg-[#535353] flex flex-row w-full flex-1 min-w-[135px] min-h-[85px] mt-6 justify-center items-center rounded-[20] overflow-hidden"
                  : "bg-[#535353] flex flex-row w-full flex-1 min-w-[112px] min-h-[55px] mt-4 justify-center items-center rounded-[20] overflow-hidden"
          }`}
      >
        <Image source={icon} className="w-6 h-6" />
        <Text className=" text-[#D9D9D9] text-secondary text-base font-semibold ml-2 ">
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-6">
      <Image source={icon} className="w-6 h-6" />
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
          backgroundColor: "transparent",
          borderRadius: 20,
          marginHorizontal: 20,
            bottom: isLandscape ? 25 : 15,
            marginLeft: isLandscape ? 150 : 20,
            marginRight: isLandscape ? 150 : 20,
          marginBottom: isLandscape ? 10 : 60,
          height: isLandscape ? 60 : 52,
          position: "absolute",
          borderWidth: 1,
          borderColor: "#8a8a8a",
            overflow: 'hidden',
        },
          tabBarBackground: () => (
              <BlurView intensity={850} tint="dark" style={{ flex: 1 }} />
          ),
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
