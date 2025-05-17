import React, {useState, useRef, useContext} from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Animated,
  Dimensions,
  Pressable, SafeAreaView, useWindowDimensions, Switch,
} from "react-native";
import { images } from "@/constansts/images";
import { icons } from "@/constansts/icons";
import AppContext, { useAppContext } from "@/app/context/appContext";

const Profile = () => {

  const { user, handleSignOut, deleteAllFavoriteMovies, deleteAllRecentlyViewedMovies } = useAppContext();

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const [showDrawer, setShowDrawer] = useState(false);
  const [showDrawer2, setShowDrawer2] = useState(false);
  const [showDrawer3, setShowDrawer3] = useState(false);
  const [showDrawer4, setShowDrawer4] = useState(false);
  const [showDrawer5, setShowDrawer5] = useState(false);
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

  const openDrawer4 = (text: string) => {
    setAlertText(text);
    setShowDrawer4(true);
    Animated.timing(slideAnim, {
      toValue: height * -0.1 + 110,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const openDrawer5 = (text: string) => {
    setAlertText(text);
    setShowDrawer5(true);
    Animated.timing(slideAnim, {
      toValue: height * -0.1 + 110,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const openDrawer3 = (text: string) => {
    setAlertText(text);
    setShowDrawer3(true);
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
    }).start(() => setShowDrawer3(false));
  };

  const closeDrawer4 = () => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setShowDrawer4(false));
  };

  const closeDrawer5 = () => {
    Animated.timing(slideAnim, {
      toValue: height,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setShowDrawer5(false));
  };

  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = (value: any) => {setSwitchValue(value); }

  return (

      <View className="flex-1 bg-[#282828]">

        <Image

            source={images.bahay}
            className={`${isLandscape ? 'absolute w-full z-0' : 'absolute w-full z-0'}`}
            style={{borderRadius: 20, borderWidth: 2, borderColor: '#000000'}}
            resizeMode="cover"
        />

        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ minHeight:  isLandscape ? height * 2.1 :0 }}
        >

          <View className="justify-center items-center">
            <View  style={{borderWidth: 2, borderColor: '#000000',}} className="bg-[#2E2E2E] mt-24 z-10 w-[317] h-[267] rounded-[25] justify-center items-center">
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

            <View style={{borderWidth: 2, borderColor: '#000000'}} className="bg-[#787878] z-20 w-[370] h-[400] mt-[-55] rounded-[25] p-4">
              <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ minHeight:  isLandscape ? height * 2.6 :"124%" }}
              >

              <Text className="text-[#D9D9D9] text-lg mb-4 font-bold">Account</Text>

              <TouchableOpacity
                  className="flex-row items-center rounded-xl p-4"
                  onPress={() => openDrawer("Notification")}

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
                  className="flex-row items-center rounded-xl p-4"
                  onPress={() => openDrawer2("Delete Recent Viewed")}
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
                  className="flex-row items-center rounded-xl p-4 mb-4"
                  onPress={() => openDrawer3("Delete Saved Movies")}
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

              <Text className="text-[#D9D9D9] text-lg mb-4 font-bold">General</Text>

              <TouchableOpacity
                  className="flex-row items-center  rounded-xl p-4"
                  onPress={() => openDrawer4("Privacy & Policy")}
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
                  className="flex-row items-center  rounded-xl p-4"
                  onPress={() => openDrawer5("Terms & Conditions")}
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
                  className="flex-row items-center  rounded-xl p-4"
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
            </ScrollView>
            </View>
          </View>
        </ScrollView>

        <Modal visible={showDrawer} transparent animationType="none">
          <Pressable className="flex-1">
            <Animated.View
                style={{
                  position: "absolute",
                  top: slideAnim,
                  left: 0,
                  right: 0,
                  backgroundColor: "#b5b5b5",
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                  padding: 20,
                  height: height * 0.5,
                }}
            >
              <View className="flex-row items-center justify-between">
              <Text className="text-xl font-bold mb-4">{alertText}</Text>
              <Switch
                onValueChange={toggleSwitch}
                value={switchValue}
                trackColor={{ false: "#767577", true: "#2e2e2e" }}
                thumbColor={switchValue ? "#787878" : "#f4f3f4"}
              />
              </View>
              <TouchableOpacity
                  className="bg-[#404040] px-4 py-3 rounded-full items-center"
                  onPress={closeDrawer}
              >
                <Text className="text-white">Close</Text>
              </TouchableOpacity>
            </Animated.View>
          </Pressable>
        </Modal>

        <Modal visible={showDrawer4} transparent animationType="none">
          <Pressable className="flex-1">
            <Animated.View
                style={{
                  position: "absolute",
                  top: slideAnim,
                  left: 0,
                  right: 0,
                  backgroundColor: "#b5b5b5",
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                  padding: 20,
                  height: height * 0.9 + 42,
                }}
            >
              <Text className="text-xl font-bold mb-4">{alertText}</Text>
              <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                        minHeight: isLandscape ? height + 550 :height + 230,
                  }}
              >
                <Text className="text-gray-600 mb-6">
                  1. Information We Collect{'\n\n'}

                  a. Google Login Information{'\n'}
                  When you sign in using your Google Account, we collect the following information from your profile:{'\n'}
                  - Full Name{'\n'}
                  - Email Address{'\n'}
                  We use Google OAuth 2.0 authentication and do not access your password or any other sensitive data.{'\n\n'}

                  b. App Usage Data{'\n'}
                  We may collect anonymous data on how you interact with the app, such as:{'\n'}
                  - Movies searched/viewed{'\n'}
                  - Search filters or preferences{'\n'}
                  - Device type and IP address{'\n\n'}

                  2. How We Use Your Information{'\n'}
                  We use the collected data to:{'\n'}
                  - Authenticate your identity{'\n'}
                  - Personalize your experience{'\n'}
                  - Provide movie suggestions and search results{'\n'}
                  - Improve app performance and user experience{'\n'}
                  - Ensure security and prevent abuse{'\n\n'}

                  3. Data Sharing and Disclosure{'\n'}
                  We do not sell, rent, or trade your personal information. Your data may be shared only in the following cases:{'\n'}
                  - With service providers who help maintain our app (under strict confidentiality agreements){'\n'}
                  - To comply with legal obligations{'\n'}
                  - To protect our rights or investigate fraud or abuse{'\n\n'}

                  4. Data Security{'\n'}
                  We use industry-standard security measures including HTTPS encryption, secure storage, and access control. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute protection.{'\n\n'}

                  5. Your Rights{'\n'}
                  You have the right to:{'\n'}
                  - Request access to your data{'\n'}
                  - Request deletion of your account and associated data{'\n'}
                  - Withdraw Google authorization at any time{'\n'}
                  To make any of these requests, please contact us at: [your support email]{'\n\n'}

                  6. Third-Party Services{'\n'}
                  This app uses third-party services such as Google for login and analytics. Use of these services is subject to their own privacy policies.{'\n'}
                  Google Privacy Policy: https://policies.google.com/privacy{'\n\n'}

                  7. Children’s Privacy{'\n'}
                  This service is not intended for children under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided us with information, please contact us immediately.{'\n\n'}

                  8. Changes to This Privacy Policy{'\n'}
                  We may update this policy from time to time. You will be notified of significant changes through the app or via email.{'\n\n'}
                </Text>
              </ScrollView>
              <TouchableOpacity
                  className="bg-[#404040] px-4 py-3 rounded-full items-center"
                  onPress={closeDrawer4}
              >
                <Text className="text-white">Close</Text>
              </TouchableOpacity>
            </Animated.View>
          </Pressable>
        </Modal>

        <Modal visible={showDrawer5} transparent animationType="none">
          <Pressable className="flex-1">
            <Animated.View
                style={{
                  position: "absolute",
                  top: slideAnim,
                  left: 0,
                  right: 0,
                  backgroundColor: "#b5b5b5",
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                  padding: 20,
                  height:height * 0.9 + 42,
                }}
            >
              <Text className="text-xl font-bold mb-4">{alertText}</Text>
              <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    minHeight: isLandscape ? height + 550 :height + 230,
                  }}
              >
                <Text className="text-gray-600 mb-6">
                  1. Acceptance of Terms{'\n\n'}
                  By using the MMFF Movie Finder App ("the App"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use the app.{'\n\n'}

                  2. Use of the App{'\n'}
                  You agree to use the app only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use and enjoyment of the app.{'\n\n'}

                  3. User Account and Login{'\n'}
                  You may log in using your Google account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.{'\n\n'}

                  4. Intellectual Property{'\n'}
                  All content, design, and branding within the app are owned by the app developers or third-party licensors. You agree not to copy, modify, distribute, or reverse engineer any part of the app without permission.{'\n\n'}

                  5. Restrictions{'\n'}
                  You must not:{'\n'}
                  - Attempt to gain unauthorized access to the app or its systems{'\n'}
                  - Use the app to upload or distribute malicious content or spam{'\n'}
                  - Violate any laws or third-party rights while using the app{'\n\n'}

                  6. Termination{'\n'}
                  We reserve the right to suspend or terminate your access to the app at any time, without notice, if you violate these Terms or if your use poses a risk to the app or its users.{'\n\n'}

                  7. Disclaimer of Warranties{'\n'}
                  The app is provided "as is" and "as available." We make no warranties regarding its availability, accuracy, or reliability. Use it at your own risk.{'\n\n'}

                  8. Limitation of Liability{'\n'}
                  To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the app.{'\n\n'}

                  9. Modifications to the Terms{'\n'}
                  We may update these Terms and Conditions at any time. We will notify users of major changes via the app or email. Continued use of the app after changes means you accept the new terms.{'\n\n'}

                  10. Governing Law{'\n'}
                  These Terms are governed by and construed in accordance with the laws of [Your Country or Region]. Disputes will be handled in the courts of [Your Jurisdiction].{'\n\n'}
                </Text>
              </ScrollView>
              <TouchableOpacity
                  className="bg-[#404040] px-4 py-3 rounded-full items-center"
                  onPress={closeDrawer5}
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
                  backgroundColor: "#b5b5b5",
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                  padding: 20,
                  height: height * 0.5,
                }}
            >
              <Text className="text-xl font-bold mb-4">{alertText}</Text>
              <Text className="text-gray-600 mb-6">U SURE BRO?</Text>
              <TouchableOpacity
                  className="bg-[#3c3c3c] px-4 py-3 rounded-full items-center"
                  onPress={() => {
                    deleteAllRecentlyViewedMovies();
                    closeDrawer2();
                  }}
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
                  className="bg-[#3c3c3c] px-4 py-3 rounded-full items-center"
                  onPress={() => {deleteAllFavoriteMovies(); closeDrawer3();}}
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
