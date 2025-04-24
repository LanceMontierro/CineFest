import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import { images } from "@/constansts/images";

import SearchBar from "@/components/SearchBar";

import { useAppContext } from "./../context/appContext";
import SampleRecent from "@/components/SampleRecent";
import { useState } from "react";
import MovieCard from "@/components/MovieCard";
import SampleTop from "@/components/SampleTop";
import SampleLatest from "@/components/SampleLatest";
import SearchBar2 from "@/components/SearchBar2";
import { useNavigation } from "@react-navigation/native";
import { icons } from "@/constansts/icons";

const Index = () => {
  const router = useRouter();

  const navigation = useNavigation();

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

        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 110,
            paddingBottom: 40,
            paddingHorizontal: 20,
          }}
        >
          <SearchBar />

          {/* Recent Viewed */}
          <View className="mt-6">
            <Text className="text-lg text-white font-bold mb-3">
              Recently Viewed
            </Text>
            {/* Placeholder or component goes here */}
            <Text className="text-white">No recent movies yet.</Text>
          </View>

          {/* Top Rated */}
          <View className="mt-6">
            <Text className="text-lg text-white font-bold mb-3">Top Rated</Text>

            <View className="flex flex-row flex-wrap gap-x-4 gap-y-6 justify-between">
              {topRatedMovies.length === 0 ? (
                <Text className="text-white">No top rated movies found.</Text>
              ) : (
                topRatedMovies.map((movie, index) => (
                  <View key={index} className="w-[48%]">
                    <Image
                      source={{ uri: movie.poster }}
                      style={{ width: "100%", height: 180, borderRadius: 10 }}
                      resizeMode="cover"
                    />
                    <Text className="text-white text-sm mt-2">
                      {movie.title}
                    </Text>
                    <Text className="text-white text-xs">
                      ⭐ {movie.rating}
                    </Text>
                  </View>
                ))
              )}
            </View>
          </View>

          {/* Latest MMFF Movies */}
          <View className="mt-6">
            <Text className="text-lg text-white font-bold mb-3">
              Latest MMFF Movies
            </Text>

            <View className="flex flex-row flex-wrap gap-x-4 gap-y-6 justify-between">
              {latestMovies.length === 0 ? (
                <Text className="text-white">No latest movies found.</Text>
              ) : (
                latestMovies.map((movie, index) => (
                  <View key={index} className="w-[48%]">
                    <Image
                      source={{ uri: movie.poster }}
                      style={{ width: "100%", height: 180, borderRadius: 10 }}
                      resizeMode="cover"
                    />
                    <Text className="text-white text-sm mt-2">
                      {movie.title}
                    </Text>
                  </View>
                ))
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </>

    /* <View className="flex-1 bg-[#282828]">
        <Image
          source={images.upperhome}
          className="absolute w-full z-0"
          resizeMode="cover"
        />

        <View className="justify-center items-center">
          <Image
            source={icons.splashicon}
            className="w-12 h-10 mt-16 mb-3 mx-auto"
          />
        </View>

        <View className="mt-7 px-5">
          <SearchBar2
            onPress={() => router2.replace("/search")}
            placeholder={"Search MMFF movies"}
          />
        </View>
      </View> */
  );
};

export default Index;
