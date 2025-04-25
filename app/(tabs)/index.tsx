import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  FlatList, Dimensions,
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
            minHeight: "125%",
            paddingHorizontal: 20,
          }}
        >
          <SearchBar />

          <View className="mt-6">
            <Text className="text-lg text-white font-bold mb-3">
              Recently Viewed
            </Text>

            <Text className="text-white">No recent movies yet.</Text>
          </View>

            <SampleTop data={topRatedMovies}/>
            <SampleLatest data={latestMovies}/>
        </ScrollView>
      </View>
    </>

  );
};

export default Index;
