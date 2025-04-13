import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Marquee } from "@animatereactnative/marquee";
import { Link, useRouter } from "expo-router";
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
} from "react-native-reanimated";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { Stagger } from "@animatereactnative/stagger";
import { Easing } from "react-native-reanimated";
import { useSSO } from "@clerk/clerk-expo";

const images = [
  require("../../assets/images/poster1.png"),
  require("../../assets/images/poster2.png"),
  require("../../assets/images/poster3.png"),
  require("../../assets/images/poster4.png"),
  require("../../assets/images/poster5.png"),
  require("../../assets/images/poster6.png"),
  require("../../assets/images/poster7.png"),
  require("../../assets/images/poster8.png"),
  require("../../assets/images/poster9.png"),
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
    const itemPosition = index * _itemSize;
    const totalSize = images.length * _itemSize;
    const range =
      ((itemPosition - offset.value) % totalSize) + width + _itemSize / 2;

<<<<<<< HEAD:app/home/homestyle.tsx
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
=======
    const _stylez = useAnimatedStyle(() => {
        const itemPosition = index * _itemSize - width - _itemSize / 2;
        const totalSize = images.length * _itemSize;
        const range = ((itemPosition - offset.value) % totalSize) + width + _itemSize / 2;

        if (index == 0){
            range;
        }
>>>>>>> fd4e4f5483ffd8fcc424a56036293dbe03e5a441:app/(home)/homestyle.tsx

  return (
    <Animated.View
      style={[
        {
          width: _itemWidth,
          height: _itemHeight,
        },

<<<<<<< HEAD:app/home/homestyle.tsx
        _stylez,
      ]}
    >
      <Image source={image} className="flex-1 rounded-[16]" />
=======
            _stylez
        ]}>

        <Image source={image}
        className="flex-1 rounded-[16]"
        />
>>>>>>> fd4e4f5483ffd8fcc424a56036293dbe03e5a441:app/(home)/homestyle.tsx
    </Animated.View>
  );
}

const Homestyle = () => {
  const offset = useSharedValue(0);
  const [activeIndex, setActiveIndex] = React.useState(0);

<<<<<<< HEAD:app/home/homestyle.tsx
  const { startSSOFlow } = useSSO();
  const router = useRouter();
  const handleGoogleSigniN = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",
      });
=======
    useAnimatedReaction(() => {
            const floatIndex = ((offset.value  + width / 2) / _itemSize) % images.length;
            return Math.abs(Math.floor(floatIndex));
        },
        (value) => {
            runOnJS(setActiveIndex)(value);
>>>>>>> fd4e4f5483ffd8fcc424a56036293dbe03e5a441:app/(home)/homestyle.tsx

      if (setActive && createdSessionId) {
        await setActive({ session: createdSessionId });
        router.replace("/(tabs)");
      }
    } catch (error) {
      console.error("Error during Google SSO:", error);
    }
  };

  useAnimatedReaction(
    () => {
      const floatIndex = (offset.value / _itemSize) % images.length;
      return Math.abs(Math.floor(floatIndex));
    },
    (value) => {
      runOnJS(setActiveIndex)(value);
    }
  );

<<<<<<< HEAD:app/home/homestyle.tsx
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <View style={[StyleSheet.absoluteFillObject, { opacity: 0.5 }]}>
        <Animated.Image
          key={`image-${activeIndex}`}
          source={images[activeIndex]}
          className="flex-1 w-full"
          resizeMode="cover"
          blurRadius={50}
          entering={FadeIn.duration(1000)}
          exiting={FadeOut.duration(1000)}
        />
      </View>
      <Marquee spacing={_spacing} position={offset}>
        <Animated.View
          className="flex-row gap-16"
          entering={FadeInUp.delay(500)
            .duration(1000)
            .easing(Easing.elastic(0.9))
            .withInitialValues({
              transform: [{ translateY: -_itemHeight / 2 }],
            })}
        >
          {images.map((image, index) => (
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
        style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
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
        <Text style={{ color: "white", fontSize: 15, marginTop: 8 }}>
          Your ultimate app for finding METRO MANILA FILMS!
        </Text>
        <TouchableOpacity className="mt-20" onPress={handleGoogleSigniN}>
          <Text style={{ color: "white", fontSize: 30, marginTop: 16 }}>
            CONTINUE
          </Text>
        </TouchableOpacity>
      </Stagger>
    </View>
  );
};
export default Homestyle;
=======
            <View style={[StyleSheet.absoluteFillObject, {opacity: 0.5}]} >
                <Animated.Image
                    key={`image-${activeIndex}`}
                    source={images[activeIndex]}
                    className="flex-1 w-full"
                    resizeMode="cover"
                    style={{flex: 1}}
                    blurRadius={40}
                    entering={FadeIn.duration(1000)}
                    exiting={FadeOut.duration(1000)}
                />
            </View>
            <Marquee
            spacing={_spacing}
            position={offset}
            >
                <Animated.View
                    style={{flexDirection: 'row', gap: _spacing}}
                    entering={FadeInUp
                        .delay(500)
                        .duration(1000)
                        .easing(Easing.elastic(0.9))
                        .withInitialValues({transform: [{ translateY: - _itemHeight / 2 }],
                        })}
                >
                    {images.map((image, index) => (
                         <Item
                             key={`image-${index}`}
                            image={image}
                            index={index}
                             offset={offset}
                        />
                    ))}
                </Animated.View>
            </Marquee>
            <Stagger initialEnteringDelay={1000} duration={500} stagger={500} style={{flex: .5, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: "white", fontSize: 30, fontWeight: "600", marginTop: 8}}>
                    Welcome to CineFest!
                </Text>
                <Text style={{color: "white", fontSize: 15, marginTop: 8}}>
                    Your ultimate app for finding METRO MANILA FILMS!
                </Text>
                <Link href="/(auth)/sign-in" className="mt-20">
                <Text style={{color: "white", fontSize: 30, marginTop: 16}}>
                    CONTINUE
                </Text>
                </Link>
            </Stagger>
        </View>
    )
}
export default Homestyle
>>>>>>> fd4e4f5483ffd8fcc424a56036293dbe03e5a441:app/(home)/homestyle.tsx
