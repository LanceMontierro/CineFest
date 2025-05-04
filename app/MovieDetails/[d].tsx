import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    useWindowDimensions, Animated, Pressable, Switch, Modal,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { icons } from "@/constansts/icons";
import { LinearGradient } from "expo-linear-gradient";
import React, {useState, useEffect, useRef} from "react";
import { useAppContext } from "./../context/appContext";

export default function MovieDetails() {
  const { addToRecentlyViewedMovies } = useAppContext();

  const {
    title,
    poster,
    description,
    genre,
    releaseDate,
    rating,
    awards,
    link,
    cast,
  } = useLocalSearchParams();

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const { addToFavoriteMovies, favortiteMovies } = useAppContext();

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const isFavorite = favortiteMovies.some(
      (movie: any) => movie.title === title
    );
    setLiked(isFavorite);
  }, [favortiteMovies, title]);

  const handleLikePress = () => {
    const movieData = {
      title,
      poster,
      description,
      genre,
      releaseDate,
      rating,
      awards,
      link,
      cast,
    };
    addToFavoriteMovies(movieData);
    setLiked((prev) => !prev);
  };

    const [showDrawer, setShowDrawer] = useState(false);
    const [showDrawer2, setShowDrawer2] = useState(false);
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

  return (
    <View className="bg-[#282828] flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: isLandscape ? height + 250 : "110%",
        }}
      >
        <View>
          <Image
            source={{ uri: poster as string }}
            style={{
              width: isLandscape ? width + 50 : width,
              height: isLandscape ? height * 0.7 : height * 0.55,
            }}
          />

          <View
            className={`bg-[#404040] rounded-b-3xl px-4 py-4 absolute right-5 items-center justify-center z-50 ${
              isLandscape ? "w-16 h-16 left-5" : "right-5"
            }`}
          >
            <TouchableOpacity
              onPress={handleLikePress}
              activeOpacity={0.8}
              className={`${isLandscape ? "w-10 h-10" : ""}`}
            >
              <Image
                source={
                  liked
                    ? require("@/assets/icons/Bookmark2.png")
                    : require("@/assets/icons/Bookmark1.png")
                }
                className="w-10 h-10"
              />
            </TouchableOpacity>
          </View>

          <LinearGradient
            colors={[
              "transparent",
              "rgba(23, 23, 23, 0.8)",
              "rgba(40, 40, 40, 1)",
            ]}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>

        <View className="mt-[-50]">
          <Text className="text-[#FAFAFA] text-center text-3xl font-bold tracking-wider px-5">
            {title}
          </Text>

          <View className="flex-row justify-center items-center gap-x-1 mt-2">
            <Text className="text-neutral-400 font-semibold text-center text-base">
              {releaseDate} •
            </Text>

            <View className="flex-row flex-wrap justify-center items-center">
              {(Array.isArray(genre)
                ? genre
                : genre?.split(",").map((item) => item.trim()) || []
              ).map((item: string, index: number) => (
                <View key={index} className="flex-row items-center">
                  <Text className="text-neutral-400 text-base text-center">
                    {item}
                  </Text>
                  {index !==
                    (Array.isArray(genre)
                      ? genre.length - 1
                      : genre.split(",").length - 1) && (
                    <Text className="text-neutral-400 text-base text-center mx-1">
                      |
                    </Text>
                  )}
                </View>
              ))}
            </View>

            <Text className="text-neutral-400 font-semibold text-center text-base">
              • {rating}
            </Text>

            <Image source={icons.star} className="size-4" />
          </View>

          <View className="flex-row flex-wrap justify-center items-center mt-2 rounded-md px-5 py-3 self-center">
            <Text className="text-[#FAFAFA] font-semibold text-center text-base">
              Awards:
            </Text>
            {(Array.isArray(awards) ? awards : awards?.split(",") || []).map(
              (item: string, index: number) => (
                <View key={index} className="flex-row items-center">
                  <Text className="text-neutral-400">{item}</Text>
                  {index !==
                    (Array.isArray(awards)
                      ? awards.length - 1
                      : awards.split(",").length - 1) && (
                    <Text className="text-neutral-400 mx-1">|</Text>
                  )}
                </View>
              )
            )}
          </View>

          <Text className="text-[#FAFAFA] font-bold text-sm mb-2 text-center">
            Description
          </Text>

          <Text className="text-neutral-400 text-center px-5">
            {description}
          </Text>

          <View className="flex-row flex-wrap justify-center items-center mt-2 rounded-md px-5 py-3 self-center">
              <TouchableOpacity onPress={() => openDrawer("Cast List")}>
                <Text className="text-[#FAFAFA] font-semibold text-center text-base">
                    {cast?.length > 0 ? "Cast" : "No Cast Available"}
                </Text>
              </TouchableOpacity>
          </View>

          <View className="flex-row flex-wrap justify-center items-center mt-2 rounded-md px-5 py-3 self-center">
            <TouchableOpacity onPress={() => openDrawer2("Trailer Link")}>
              <Text className="text-[#FAFAFA] font-semibold text-center text-base">
                {link?.length > 0 ? "Watch Trailer" : "No Trailer Available"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={{
          backgroundColor: "#404040",
          position: "absolute",
          bottom: 5,
          left: 0,
          right: 0,
          paddingHorizontal: 20,
          paddingVertical: 14,
          flexDirection: "row",
          alignItems: "center",
          marginLeft: isLandscape ? 150 : 30,
          marginRight: isLandscape ? 150 : 30,
          justifyContent: "center",
          zIndex: 50,
          borderRadius: 10,
          marginBottom: isLandscape ? 20 : 60,
        }}
        onPress={router.back}
      >
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-white font-semibold text-base">Go Back</Text>
      </TouchableOpacity>

        <Modal visible={showDrawer} transparent animationType="none">
            <Pressable className="flex-1">
                <Animated.View
                    style={{
                        position: "absolute",
                        top: slideAnim,
                        left: 0,
                        right: 0,
                        backgroundColor: "#e3e3e3",
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        padding: 20,
                        height: height * 0.5,
                    }}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            minHeight: isLandscape ? height :height + 150,
                        }}
                    >
                        <Text className="text-xl font-bold mb-4">{alertText}</Text>
                        <View className="flex-row flex-wrap justify-center items-center rounded-md px-5 self-center">
                        {(Array.isArray(cast) ? cast : cast?.split(",") || []).map(
                            (item: string, index: number) => (
                                <View key={index} className="flex-row items-center">
                                    <Text className="text-black">{item}</Text>
                                    {index !==
                                        (Array.isArray(cast)
                                            ? cast.length - 1
                                            : cast.split(",").length - 1) && (
                                            <Text className="text-neutral-800 mx-1">|</Text>
                                        )}
                                </View>
                            )
                        )}
                        </View>
                    </ScrollView>
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
            <Pressable className="flex-1">
                <Animated.View
                    style={{
                        position: "absolute",
                        top: slideAnim,
                        left: 0,
                        right: 0,
                        backgroundColor: "#e3e3e3",
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                        padding: 20,
                        height: height * 0.5,
                    }}
                >
                        <Text className="text-xl font-bold mb-4">{alertText}</Text>
                        <Text className="text-gray-600 text-xl font-bold mb-4">{link}</Text>
                    <TouchableOpacity
                        className="bg-[#404040] px-4 py-3 rounded-full items-center"
                        onPress={closeDrawer2}
                    >
                        <Text className="text-white">Close</Text>
                    </TouchableOpacity>
                </Animated.View>
            </Pressable>
        </Modal>
    </View>
  );
}
