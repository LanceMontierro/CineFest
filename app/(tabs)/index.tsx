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

  const { user, movies } = useAppContext() as {
    user: any;
    movies: Movie[];
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
          className="flex-1 px-5"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
        >
          <View className="flex-1 mt-5 pt-28">
            <SearchBar />
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Recent Viewed
              </Text>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Top Rated
              </Text>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest MMFF Movies
              </Text>
            </>
          </View>
        </ScrollView>
      </View>

      <View className="flex flex-row flex-wrap gap-4">
        {movies.length === 0 ? (
          <Text className="text-white">No movies found.</Text>
        ) : (
          movies.map((movie, index) => (
            <View key={index} className="w-[30%] mb-4 mr-3">
              <Image
                source={{ uri: movie.poster }}
                style={{ width: "100%", height: 150, borderRadius: 10 }}
                resizeMode="cover"
              />
              <Text className="text-white text-sm mt-2">{movie.title}</Text>
            </View>
          ))
        )}
      </View>

      <View className="flex-1 bg-[#282828]">
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
      </View>
    </>
  );
};

export default Index;
