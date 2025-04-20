import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React from "react";
import { images } from "@/constansts/images";
import { icons } from "@/constansts/icons";
import { useAppContext } from "@/app/context/appContext";

const Profile = () => {
  const handlePress = (label: string) => {};
  const { user, handleSignOut } = useAppContext();

  return (
    <View className="flex-1 bg-[#282828]">

        <Image
          source={images.bahay}
          className="absolute w-full z-0"
          resizeMode="cover"
        />
      <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ minHeight: "124%" }}
      >
        <View className="justify-center items-center">
          <View className="bg-[#2E2E2E] mt-24 z-10 w-[317] h-[267] rounded-[25] justify-center items-center">
            <Image source={images.Star1} className="mt-[-50]"/>
            {user && user.emailAddresses?.[0]?.emailAddress ? (
              <Text className="mt-10 text-white text-lg">
                {user.emailAddresses[0].emailAddress}
              </Text>
            ) : (
              <Text className="mt-10 ext-lg text-red-400">
                No user logged in
              </Text>
            )}
          </View>

          <View className="bg-[#787878] z-20 w-[345] h-[267] mt-[-55] rounded-[25] p-4">
            <Text className="text-[#D9D9D9] text-lg mb-4">Account</Text>

            <TouchableOpacity
              className="flex-row items-center bg-[#888] rounded-xl p-4 mb-2"
              onPress={() => handlePress("Settings")}
            >
              <View className="bg-white rounded-xl p-2 mr-4">
                <Image
                  source={icons.Settings}
                  className="w-5 h-5"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-[#D9D9D9] text-base flex-1">Settings</Text>
              <Text className="text-[#D9D9D9]">{">"}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center bg-[#888] rounded-xl p-4 mb-2"
              onPress={() => handlePress("Notification")}
            >
              <View className="bg-white rounded-xl p-2 mr-4">
                <Image
                  source={icons.Bell}
                  className="w-5 h-5"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-[#D9D9D9] text-base flex-1">
                Notification
              </Text>
              <Text className="text-[#D9D9D9]">{">"}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="flex-row items-center bg-[#888] rounded-xl p-4 mb-2"
                onPress={() => handlePress("Notification")}
            >
              <View className="bg-white rounded-xl p-2 mr-4">
                <Image
                    source={icons.Alisnako}
                    className="w-5 h-5"
                    resizeMode="contain"
                />
              </View>
              <Text className="text-[#D9D9D9] text-base flex-1">
                Delete Account
              </Text>
              <Text className="text-[#D9D9D9]">{">"}</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-4"></View>

          <View className="bg-[#787878] z-20 w-[345] h-[267] rounded-[25] p-4">
            <Text className="text-[#D9D9D9] text-lg mb-4">General</Text>

            <TouchableOpacity
              className="flex-row items-center bg-[#888] rounded-xl p-4 mb-2"
              onPress={() => handlePress("Settings")}
            >
              <View className="bg-white rounded-xl p-2 mr-4">
                <Image
                  source={icons.Lock}
                  className="w-5 h-5"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-[#D9D9D9] text-base flex-1">
                Privacy & Policy
              </Text>
              <Text className="text-[#D9D9D9]">{">"}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center bg-[#888] rounded-xl p-4 mb-2"
              onPress={() => handlePress("Notification")}
            >
              <View className="bg-white rounded-xl p-2 mr-4">
                <Image
                  source={icons.Info}
                  className="w-5 h-5"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-[#D9D9D9] text-base flex-1">
                Terms & Conditions
              </Text>
              <Text className="text-[#D9D9D9]">{">"}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center bg-[#888] rounded-xl p-4"
              onPress={handleSignOut}
            >
              <View className="bg-white rounded-xl p-2 mr-4">
                <Image
                  source={icons.Logout}
                  className="w-5 h-5"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-[#D9D9D9] text-base flex-1">Log-out</Text>
              <Text className="text-[#D9D9D9]">{">"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
