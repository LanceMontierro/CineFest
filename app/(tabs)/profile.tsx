import React, {useState, useRef, useContext, useEffect} from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
    StyleSheet,
  Animated,
  Dimensions,
  Pressable, SafeAreaView, useWindowDimensions, Switch, Button,
} from "react-native";
import { images } from "@/constansts/images";
import { icons } from "@/constansts/icons";
import AppContext, { useAppContext } from "@/app/context/appContext";
import NotificationSwitch from "@/components/NotificationSwitch";

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

  return (

      <View style={styles.container}>

        <Image
            source={images.bahay}
            style={[styles.backgroundImage, {
              borderRadius: 20,
              borderWidth: 2,
              borderColor: '#000000',
            }]}
            resizeMode="cover"
        />

        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ minHeight: isLandscape ? height * 2.2 : 0 }}
        >
          <View style={styles.centered}>
            <View style={[styles.profileBox, { borderWidth: 2, borderColor: '#000000' }]}>
              <Image source={images.Star1} style={styles.starIcon} />
              {user && user.emailAddresses?.[0]?.emailAddress ? (
                  <Text style={styles.userEmail}>
                    {user.emailAddresses[0].emailAddress}
                  </Text>
              ) : (
                  <Text style={styles.noUser}>No user logged in</Text>
              )}
            </View>

            <View style={[styles.accountBox, { borderWidth: 2, borderColor: '#000000' }]}>
              <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    minHeight: isLandscape ? height * 2.6 : 0,
                  }}
              >

                <Text style={styles.sectionTitle}>Account</Text>

                <TouchableOpacity style={styles.row} onPress={() => openDrawer("Notification")}>
                  <View style={styles.iconWrapper}>
                    <Image source={icons.Bell} style={styles.icon} resizeMode="contain" />
                  </View>
                  <Text style={styles.itemText}>Notification</Text>
                  <Text style={styles.arrow}>{">"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.row} onPress={() => openDrawer2("Delete Recent Viewed")}>
                  <View style={styles.iconWrapper}>
                    <Image source={icons.Alisnako} style={styles.icon} resizeMode="contain" />
                  </View>
                  <Text style={styles.itemText}>Clear Recent Viewed</Text>
                  <Text style={styles.arrow}>{">"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.row, styles.mb4]} onPress={() => openDrawer3("Delete Saved Movies")}>
                  <View style={styles.iconWrapper}>
                    <Image source={icons.Alisnako} style={styles.icon} resizeMode="contain" />
                  </View>
                  <Text style={styles.itemText}>Clear Saved Movies</Text>
                  <Text style={styles.arrow}>{">"}</Text>
                </TouchableOpacity>

                <Text style={styles.sectionTitle}>General</Text>

                <TouchableOpacity style={styles.row} onPress={() => openDrawer4("Privacy & Policy")}>
                  <View style={styles.iconWrapper}>
                    <Image source={icons.Lock} style={styles.icon} resizeMode="contain" />
                  </View>
                  <Text style={styles.itemText}>Privacy & Policy</Text>
                  <Text style={styles.arrow}>{">"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.row} onPress={() => openDrawer5("Terms & Conditions")}>
                  <View style={styles.iconWrapper}>
                    <Image source={icons.Info} style={styles.icon} resizeMode="contain" />
                  </View>
                  <Text style={styles.itemText}>Terms & Conditions</Text>
                  <Text style={styles.arrow}>{">"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.row} onPress={handleSignOut}>
                  <View style={styles.iconWrapper}>
                    <Image source={icons.Logout} style={styles.icon} resizeMode="contain" />
                  </View>
                  <Text style={styles.itemText}>Log-out</Text>
                  <Text style={styles.arrow}>{">"}</Text>
                </TouchableOpacity>

              </ScrollView>
            </View>
          </View>
        </ScrollView>

        <Modal visible={showDrawer} transparent animationType="none">
          <Pressable style={styles.flex1}>
            <Animated.View
                style={[
                  styles.drawer,
                  {
                    top: slideAnim,
                    height: height * 0.5,
                  },
                ]}
            >
              <View style={styles.rowSpaceBetween}>
                <Text style={styles.modalTitle}>{alertText}</Text>
                <NotificationSwitch />
              </View>
              <TouchableOpacity style={styles.closeButton} onPress={closeDrawer}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </Animated.View>
          </Pressable>
        </Modal>

        <Modal visible={showDrawer4} transparent animationType="none">
          <Pressable style={styles.flex1}>
            <Animated.View
                style={[
                  styles.drawer,
                  {
                    top: slideAnim,
                    height: height * 0.9 + 42,
                  },
                ]}
            >
              <Text style={styles.modalTitle}>{alertText}</Text>
              <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    minHeight: isLandscape ? height + 550 : height + 230,
                  }}
              >
                <Text style={styles.modalContentText}>
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
              <TouchableOpacity style={styles.closeButton} onPress={closeDrawer4}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </Animated.View>
          </Pressable>
        </Modal>

        <Modal visible={showDrawer5} transparent animationType="none">
          <Pressable style={styles.flex1}>
            <Animated.View
                style={[
                  styles.drawer,
                  {
                    top: slideAnim,
                    height: height * 0.9 + 42,
                  },
                ]}
            >
              <Text style={styles.modalTitle}>{alertText}</Text>
              <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    minHeight: isLandscape ? height + 550 : height + 230,
                  }}
              >
                <Text style={styles.modalContentText}>
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
              <TouchableOpacity style={styles.closeButton} onPress={closeDrawer5}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </Animated.View>
          </Pressable>
        </Modal>

        <Modal visible={showDrawer2} transparent animationType="none">
          <Pressable style={styles.flex1} onPress={closeDrawer2}>
            <Animated.View
                style={[
                  styles.drawer,
                  {
                    top: slideAnim,
                    height: height * 0.5,
                  },
                ]}
            >
              <Text style={styles.modalTitle}>{alertText}</Text>
              <Text style={styles.confirmText}>U SURE BRO?</Text>
              <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={() => {
                    deleteAllRecentlyViewedMovies();
                    closeDrawer2();
                  }}
              >
                <Text style={styles.confirmButtonText}>DELETE</Text>
              </TouchableOpacity>
            </Animated.View>
          </Pressable>
        </Modal>

        <Modal visible={showDrawer3} transparent animationType="none">
          <Pressable style={styles.flex1} onPress={closeDrawer3}>
            <Animated.View
                style={[
                  styles.drawerLight,
                  {
                    top: slideAnim,
                    height: height * 0.5,
                  },
                ]}
            >
              <Text style={styles.modalTitle}>{alertText}</Text>
              <Text style={styles.confirmText}>U SURE BRO?</Text>
              <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={() => {
                    deleteAllFavoriteMovies();
                    closeDrawer3();
                  }}
              >
                <Text style={styles.confirmButtonText}>DELETE</Text>
              </TouchableOpacity>
            </Animated.View>
          </Pressable>
        </Modal>
      </View>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#282828',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    zIndex: 0,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D9D9D9',
    marginBottom: 24,
    alignSelf: 'center',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  buttonWrapper: {
    gap: 16,
    paddingBottom: 48,
  },
  button: {
    backgroundColor: '#3c3c3c',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#D9DFF2',
    fontSize: 16,
    fontWeight: '500',
  },
  signOutButton: {
    backgroundColor: '#DC2626',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  signOutText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  drawer: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#b5b5b5',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  drawerLight: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#D9D9D9',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalContentText: {
    color: '#4B5563',
    marginBottom: 24,
  },
  closeButton: {
    backgroundColor: '#404040',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 9999,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#ffffff',
  },
  confirmText: {
    color: '#4B5563',
    marginBottom: 24,
  },
  confirmButton: {
    backgroundColor: '#3c3c3c',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 9999,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#D9DFF2',
  },

  // Profile section boxes
  profileBox: {
    backgroundColor: '#2E2E2E',
    marginTop: 96,
    zIndex: 10,
    width: 317,
    height: 267,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starIcon: {
    marginTop: -50,
  },
  userEmail: {
    marginTop: 40,
    color: 'white',
    fontSize: 18,
  },
  noUser: {
    marginTop: 40,
    fontSize: 18,
    color: '#F87171',
  },
  accountBox: {
    backgroundColor: '#787878',
    zIndex: 20,
    width: 370,
    height: 400,
    marginTop: -55,
    borderRadius: 25,
    padding: 16,
  },
  sectionTitle: {
    color: '#D9D9D9',
    fontSize: 18,
    marginBottom: 16,
    fontWeight: 'bold',
  },

  iconWrapper: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 8,
    marginRight: 16,
  },
  icon: {
    width: 20,
    height: 20,
  },
  itemText: {
    color: '#D9D9D9',
    fontSize: 16,
    flex: 1,
  },
  arrow: {
    color: '#D9D9D9',
  },

  mb4: {
    marginBottom: 16,
  },
});

export default Profile;
