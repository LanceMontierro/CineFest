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

    const slideAnim = useRef(new Animated.Value(height)).current;

  return (
    <View className="bg-[#282828] flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: isLandscape ? height + 250 : "120%",
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

            <TouchableOpacity className="absolute z-50" onPress={() => router.back()}>
            <View className="absolute top-5 ml-3 left-6 z-50">
                <Image source={icons.Left} className="z-50 w-10 h-10" resizeMode="contain"/>
            </View>
            </TouchableOpacity>

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
                    ? require("@/assets/icons/Bookmark1.png")
                    : require("@/assets/icons/Bookmark2.png")
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

            <Text className="text-[#FAFAFA] font-semibold text-center mt-3 text-base">
                Awards
            </Text>

          <View className="flex-row flex-wrap justify-center items-center rounded-md px-5 py-3 self-center">
            {(Array.isArray(awards) ? awards : awards?.split(",") || []).map(
              (item: string, index: number) => (
                <View key={index} className="flex-row items-center">
                  <Text className="text-neutral-400"> {item}</Text>
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

          <Text className="text-[#FAFAFA] font-bold text-sm mb-2 mt-3 text-center">
            Description
          </Text>

          <Text className="text-neutral-400 text-center px-5">
            {description}
          </Text>

            <Text className="text-[#FAFAFA] font-semibold text-center text-base mt-5">
                {cast?.length > 0 ? "Cast" : "Cast: N/A"}
            </Text>

          <View className="flex-row flex-wrap justify-center items-center rounded-md px-5 py-3 self-center">
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  {(Array.isArray(cast) ? cast : cast?.split(",") || []).map(
                      (item: string, index: number) => (
                          <View key={index} className="flex-row items-center">
                              <View
                                  style={{
                                      backgroundColor: '#787878',
                                      borderWidth: 2,
                                      borderColor: '#000000',
                                      borderRadius: 999,
                                      paddingHorizontal: 20,
                                      height: 40,
                                      marginTop: 8,
                                      marginRight: 8,
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      shadowColor: '#000',
                                      shadowOffset: { width: 0, height: 2 },
                                      shadowOpacity: 0.25,
                                      shadowRadius: 3.84,
                                      elevation: 5,
                                  }}
                              >
                                  <Text
                                      style={{
                                          color: '#FAFAFA',
                                          fontWeight: '500',
                                      }}
                                  >
                                      {item}
                                  </Text>
                              </View>

                              {index !==
                                  (Array.isArray(cast)
                                      ? cast.length - 1
                                      : cast.split(",").length - 1) && (
                                          <Text className="text-neutral-800 mx-1">|</Text>
                                  )}
                          </View>
                          )
                      )}
              </ScrollView>
          </View>

          <View className="flex-row flex-wrap justify-center items-center rounded-md px-5 py-3 self-center">
              <Text className="text-[#FAFAFA] font-semibold text-center text-base">
                {link?.length > 0 ? "Watch Trailer " : "No Trailer Available"}
              </Text>
              <Text selectable={true} className="text-neutral-400 font-bold mb-4">{link}</Text>
          </View>
        </View>
      </ScrollView>

    </View>
  );
}
