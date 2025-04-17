import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useEffect, useRef } from "react";
import { Marquee } from "@animatereactnative/marquee";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Link, useRouter, Stack } from "expo-router";
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
} from "react-native-reanimated";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { Stagger } from "@animatereactnative/stagger";
import { Easing } from "react-native-reanimated";
import { images } from "@/constansts/images";
import { useClerk, useSSO } from "@clerk/clerk-expo";
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

const { width } = Dimensions.get("window");
const _itemWidth = width * 0.62;
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
    const itemPosition = index * _itemSize - width - _itemSize / 2;
    const totalSize = IMAGES.length * _itemSize;
    const range =
      ((itemPosition - offset.value) % totalSize) + width + _itemSize / 2;

    if (index == 0) {
      range;
    }

    return {
      transform: [
        {
          rotate: `${interpolate(
            range,
            [-_itemSize, (width - _itemSize) / 2, width],
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

  const fadeStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
    };
  });

  const offset = useSharedValue(0);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const { startSSOFlow } = useSSO();
  const router = useRouter();
  const { saveUser, user, isSignedIn } = useAppContext();

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
      <View className="flex-1 justify-center items-center bg-black">
        <View style={[StyleSheet.absoluteFillObject, { opacity: 0.5 }]}>
          <Animated.Image
            key={`image-${activeIndex}`}
            source={IMAGES[activeIndex]}
            style={{ flex: 1 }}
            className="flex-1 w-full"
            resizeMode="cover"
            blurRadius={40}
            entering={FadeIn.duration(1000)}
            exiting={FadeOut.duration(1000)}
          />
        </View>

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

        <Stagger
          initialEnteringDelay={1000}
          duration={500}
          stagger={500}
          style={{ flex: 0.6, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "600",
              marginTop: 8,
            }}
          >
            Welcome to CineFest!
          </Text>
          <Text
            style={{ color: "white", fontSize: 15, marginTop: 8, opacity: 0.6 }}
          >
            Your ultimate app for finding
          </Text>
          <Text style={{ color: "white", fontSize: 15, opacity: 0.6 }}>
            METRO MANILA FILMS!
          </Text>
          <TouchableOpacity
            className="mt-20 inline-block"
            onPress={handleGoogleSignIn}
          >
            <View className="flex-row items-center bg-white rounded-[16] py-5 px-5">
              <Image source={images.google} className="w-10 h-10 mr-2" />
              <Text style={{ color: "block", fontSize: 20 }}>
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
