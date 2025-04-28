import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Animated,
  Dimensions,
  Pressable, SafeAreaView, useWindowDimensions,
} from "react-native";
import { images } from "@/constansts/images";
import { icons } from "@/constansts/icons";
import { useAppContext } from "@/app/context/appContext";

const Profile = () => {
  const { user, handleSignOut } = useAppContext();

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const [showDrawer, setShowDrawer] = useState(false);
  const [showDrawer2, setShowDrawer2] = useState(false);
  const [showDrawer3, setShowDrawer3] = useState(false);
  const [alertText, setAlertText] = useState("");
  const slideAnim = useRef(new Animated.Value(height)).current;

  const openDrawer = (text: string) => {
    setAlertText(text);
    setShowDrawer(true);
    Animated.timing(slideAnim, {
      toValue: height * 0.5,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const openDrawer2 = (text: string) => {
    setAlertText(text);
    setShowDrawer2(true);
    Animated.timing(slideAnim, {
      toValue: height * 0.5,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const openDrawer3 = (text: string) => {
    setAlertText(text);
    setShowDrawer2(true);
    Animated.timing(slideAnim, {
      toValue: height * 0.5,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setShowDrawer(false));
  };

  const closeDrawer2 = () => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setShowDrawer2(false));
  };

  const closeDrawer3 = () => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setShowDrawer2(false));
  };

  return (

      <View className="flex-1 bg-[#282828]">
        <Image
            source={images.bahay}
            className={`${isLandscape ? 'absolute w-full z-0' : 'absolute w-full z-0'}`}
            resizeMode="cover"
        />

        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ minHeight:  isLandscape ? height * 2.6 :"124%" }}
        >
          <View className="justify-center items-center">
            <View className="bg-[#2E2E2E] mt-24 z-10 w-[317] h-[267] rounded-[25] justify-center items-center">
              <Image source={images.Star1} className="mt-[-50]" />
              {user && user.emailAddresses?.[0]?.emailAddress ? (
                  <Text className="mt-10 text-white text-lg">
                    {user.emailAddresses[0].emailAddress}
                  </Text>
              ) : (
                  <Text className="mt-10 text-lg text-red-400">
                    No user logged in
                  </Text>
              )}
            </View>

            <View className="bg-[#787878] z-20 w-[345] h-[267] mt-[-55] rounded-[25] p-4">
              <Text className="text-[#D9D9D9] text-lg mb-4">Account</Text>

              <TouchableOpacity
                  className="flex-row items-center bg-[#888] rounded-xl p-4 mb-2"
                  onPress={() => openDrawer("Settings")}

              >
                <View className="bg-white rounded-xl p-2 mr-4">
                  <Image
                      source={icons.Bell}
                      className="w-5 h-5"
                      resizeMode="contain"
                  />
                </View>
                <Text className="text-[#D9D9D9] text-base flex-1">Notification</Text>
                <Text className="text-[#D9D9D9]">{">"}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  className="flex-row items-center bg-[#888] rounded-xl p-4 mb-2"
                  onPress={() => openDrawer3("Delete Recent Viewed")}
              >
                <View className="bg-white rounded-xl p-2 mr-4">
                  <Image
                      source={icons.Alisnako}
                      className="w-5 h-5"
                      resizeMode="contain"
                  />
                </View>
                <Text className="text-[#D9D9D9] text-base flex-1">
                  Clear Recent Viewed
                </Text>
                <Text className="text-[#D9D9D9]">{">"}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  className="flex-row items-center bg-[#888] rounded-xl p-4 mb-2"
                  onPress={() => openDrawer2("Delete Saved Movies")}
              >
                <View className="bg-white rounded-xl p-2 mr-4">
                  <Image
                      source={icons.Alisnako}
                      className="w-5 h-5"
                      resizeMode="contain"
                  />
                </View>
                <Text className="text-[#D9D9D9] text-base flex-1">
                  Clear Saved Movies
                </Text>
                <Text className="text-[#D9D9D9]">{">"}</Text>
              </TouchableOpacity>
            </View>

            <View className="mt-4" />

            <View className="bg-[#787878] z-20 w-[345] h-[267] rounded-[25] p-4">
              <Text className="text-[#D9D9D9] text-lg mb-4">General</Text>

              <TouchableOpacity
                  className="flex-row items-center bg-[#888] rounded-xl p-4 mb-2"
                  onPress={() => openDrawer("Privacy & Policy")}
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
                  onPress={() => openDrawer("Terms & Conditions")}
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

        <Modal visible={showDrawer} transparent animationType="none">
          <Pressable className="flex-1" onPress={closeDrawer}>
            <Animated.View
                style={{
                  position: "absolute",
                  top: slideAnim,
                  left: 0,
                  right: 0,
                  backgroundColor: "#D9D9D9",
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                  padding: 20,
                  height: height * 0.5,
                }}
            >
              <Text className="text-xl font-bold mb-4">{alertText}</Text>
              <Text className="text-gray-600 mb-6"></Text>
              <TouchableOpacity
                  className="bg-[#404040] px-4 py-3 rounded-full items-center"
                  onPress={closeDrawer}
              >
                <Text className="text-white">Close</Text>
              </TouchableOpacity>
            </Animated.View>
          </Pressable>
        </Modal>


        <Modal visible={showDrawer2} transparent animationType="none">

          <Pressable className="flex-1" onPress={closeDrawer2}>

            <Animated.View
                style={{
                  position: "absolute",
                  top: slideAnim,
                  left: 0,
                  right: 0,
                  backgroundColor: "#D9D9D9",
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                  padding: 20,
                  height: height * 0.5,
                }}
            >
              <Text className="text-xl font-bold mb-4">{alertText}</Text>
              <Text className="text-gray-600 mb-6">U SURE BRO?</Text>
              <TouchableOpacity
                  className="bg-red-800 px-4 py-3 rounded-full items-center"
                  onPress={closeDrawer2}
              >
                <Text className="text-[#D9DFF2]">DELETE</Text>
              </TouchableOpacity>
            </Animated.View>
          </Pressable>
        </Modal>
        <Modal visible={showDrawer3} transparent animationType="none">

          <Pressable className="flex-1" onPress={closeDrawer3}>

            <Animated.View
                style={{
                  position: "absolute",
                  top: slideAnim,
                  left: 0,
                  right: 0,
                  backgroundColor: "#D9D9D9",
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                  padding: 20,
                  height: height * 0.5,
                }}
            >
              <Text className="text-xl font-bold mb-4">{alertText}</Text>
              <Text className="text-gray-600 mb-6">U SURE BRO?</Text>
              <TouchableOpacity
                  className="bg-red-800 px-4 py-3 rounded-full items-center"
                  onPress={closeDrawer3}
              >
                <Text className="text-[#D9DFF2]">DELETE</Text>
              </TouchableOpacity>
            </Animated.View>
          </Pressable>
        </Modal>
      </View>
  );
};

export default Profile;
