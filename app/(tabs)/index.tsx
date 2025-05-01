import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  FlatList,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";

import { images } from "@/constansts/images";

import SearchBar from "@/components/SearchBar";

import { useAppContext } from "./../context/appContext";
import SampleRecent from "@/components/SampleRecent";
import React, { useState } from "react";
import MovieCard from "@/components/MovieCard";
import SampleTop from "@/components/SampleTop";
import SampleLatest from "@/components/SampleLatest";

import SearchBar2 from "@/components/SearchBar2";
import { useNavigation } from "@react-navigation/native";
import { icons } from "@/constansts/icons";

const Index = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const router = useRouter();

  const { user, movies, latestMovies, topRatedMovies } = useAppContext() as {
    user: any;
    movies: Movie[];
    latestMovies: Movie[];
    topRatedMovies: Movie[];
  };

  type Movie = {
    title: string;
    description: string;
    poster: string;
    genre: string;
    releaseDate: string;
    rating: string;
    awards: string;
    link: string;
  };

  const router2 = useRouter();

  return (
    <>
      <View className="flex-1 bg-[#282828]">
        <Image
          source={images.upperhome}
          className="absolute w-full z-0"
          resizeMode="cover"
        />

        <View className="justify-center items-center">
          <Image
            source={icons.splashicon}
            className={`${
              isLandscape
                ? "w-12 h-10 mt-6 mx-auto"
                : "w-12 h-10 mt-16 mb-5 mx-auto"
            }`}
          />
        </View>

        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 40,
            minHeight: isLandscape ? height + 550 : height + 250,
            paddingHorizontal: 20,
          }}
        >
          <View className={`${isLandscape ? "mt-4" : "mt-10"}`}>
            <SearchBar2
              placeholder={"Search MMFF Movies"}
              onPress={() => {
                router.push("/search");
              }}
            />
          </View>

          <SampleLatest data={latestMovies} />
          <SampleTop data={topRatedMovies} />

          <View className="mt-6">
            <Text className="text-lg text-white font-bold mb-3">
              Recently Viewed
            </Text>

            <Text className="text-white">No recent movies yet.</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Index;
