import { View, Text, Image, Dimensions, TouchableOpacity, useWindowDimensions, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Marquee } from "@animatereactnative/marquee";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import {
  FadeIn,
  FadeInUp,
  FadeOut,
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { Stagger } from "@animatereactnative/stagger";
import { images } from "@/constansts/images";
import { useSSO } from "@clerk/clerk-expo";
import LottieView from "lottie-react-native";
import { useAppContext } from "../context/appContext";

const IMAGES = [
  require("../../assets/images/poster1.png"),
  require("../../assets/images/poster2.png"),
  require("../../assets/images/poster3.png"),
  require("../../assets/images/poster4.png"),
  require("../../assets/images/poster5.png"),
  require("../../assets/images/poster6.png"),
  require("../../assets/images/poster7.png"),
  require("../../assets/images/poster8.png"),
  require("../../assets/images/poster9.png"),
  require("../../assets/images/poster10.png"),
];

const { width: screenWidth } = Dimensions.get("window");
const _itemWidth = screenWidth * 0.62;
const _itemHeight = _itemWidth * 1.67;
const _spacing = 50;
const _itemSize = _itemWidth + _spacing;

function Item({
                image,
                index,
                offset,
              }: {
  image: any;
  index: number;
  offset: SharedValue<number>;
}) {
  const _stylez = useAnimatedStyle(() => {
    const itemPosition = index * _itemSize - screenWidth - _itemSize / 2;
    const totalSize = IMAGES.length * _itemSize;
    const range =
        ((itemPosition - offset.value) % totalSize) + screenWidth + _itemSize / 2;

    return {
      transform: [
        {
          rotate: `${interpolate(
              range,
              [-_itemSize, (screenWidth - _itemSize) / 2, screenWidth],
              [-3, 0, 3]
          )}deg`,
        },
      ],
    };
  });

  return (
      <Animated.View
          style={[
            {
              width: _itemWidth,
              height: _itemHeight,
            },
            _stylez,
          ]}
      >
        <Image source={image} className="flex-1 rounded-[16]" />
      </Animated.View>
  );
}

const Introstyle = () => {
  const animationRef = useRef<LottieView>(null);
  const fadeAnim = useSharedValue(1);
  const offset = useSharedValue(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const { startSSOFlow } = useSSO();
  const router = useRouter();
  const { saveUser, user, isSignedIn } = useAppContext();

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const fadeStyle = useAnimatedStyle(() => {
    return { opacity: fadeAnim.value };
  });

  const handleGoogleSignIn = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",
      });

      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        router.replace("/(tabs)");
      }

      console.log(createdSessionId);
    } catch (error) {
      console.error("Error during Google SSO:", error);
    }
  };

  useEffect(() => {
    if (user && isSignedIn) {
      saveUser(user);
      console.log(user);
    }
  }, [user, isSignedIn]);

  useAnimatedReaction(
      () => {
        const floatIndex =
            ((offset.value + width / 2) / _itemSize) % IMAGES.length;
        return Math.abs(Math.floor(floatIndex));
      },
      (value) => {
        runOnJS(setActiveIndex)(value);
      }
  );

  return (
      <GestureHandlerRootView className="flex-1">
        <View
            className="flex-1 bg-black"
            style={{ flexDirection: isLandscape ? "row" : "column" }}
        >

          <View style={[StyleSheet.absoluteFillObject, { opacity: 0.5 }]}>
            <Animated.Image
                key={`image-${activeIndex}`}
                source={IMAGES[activeIndex]}
                style={{ flex: 1 }}
                className="w-full h-full"
                resizeMode="cover"
                blurRadius={40}
                entering={FadeIn.duration(1000)}
                exiting={FadeOut.duration(1000)}
            />
          </View>

          <View className={`${isLandscape ? 'flex-1 justify-center items-center' : 'flex-1 justify-center items-center mt-20'}`}>
            <Marquee spacing={_spacing} position={offset}>
              <Animated.View
                  style={{ flexDirection: "row", gap: _spacing }}
                  entering={FadeInUp.delay(500)
                      .duration(1000)
                      .easing(Easing.elastic(0.9))
                      .withInitialValues({
                        transform: [{ translateY: -_itemHeight / 2 }],
                      })}
              >
                {IMAGES.map((image, index) => (
                    <Item
                        key={`image-${index}`}
                        image={image}
                        index={index}
                        offset={offset}
                    />
                ))}
              </Animated.View>
            </Marquee>
          </View>

          <Stagger
              initialEnteringDelay={1000}
              duration={500}
              stagger={500}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 50,
                paddingHorizontal: 20,
              }}
          >
            <Text style={{ color: "white", fontSize: 30, fontWeight: "600", marginTop: 8 }}>
              Welcome to CineFest!
            </Text>
            <Text style={{ color: isLandscape ? "white" : "white", fontSize: 15, marginTop: 8, opacity: isLandscape ? 1 : 0.6 }}>
              Your ultimate app for finding
            </Text>
            <Text style={{ color: isLandscape ? "white" : "white", fontSize: 15, opacity: isLandscape ? 1 : 0.6 }}>
              METRO MANILA FILMS!
            </Text>

            <TouchableOpacity
                className="mt-10 bg-white shadow-xl shadow-zinc-950 rounded-[16] py-4 px-4"
                onPress={handleGoogleSignIn}
            >
              <View className="flex-row items-center">
                <Image source={images.google} className="w-10 h-10 mr-2" />
                <Text style={{ color: "black", fontSize: 20 }}>
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>
          </Stagger>
        </View>
      </GestureHandlerRootView>
  );
};

export default Introstyle;
