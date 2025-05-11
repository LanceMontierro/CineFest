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

import { useAppContext } from "./../context/appContext";
import SampleRecent from "@/components/SampleRecent";
import React, { useState } from "react";
import SampleTop from "@/components/SampleTop";
import SampleLatest from "@/components/SampleLatest";
import {images} from "@/constansts/images";
import SearchBar2 from "@/components/SearchBar2";
import {icons} from "@/constansts/icons";

const IMAGES = [
    require("../../assets/images/po1.png"),
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

const Index = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const router = useRouter();

  const { user, movies, latestMovies, topRatedMovies, recentOpenMovies } =
    useAppContext() as {
      user: any;
      movies: Movie[];
      latestMovies: Movie[];
      topRatedMovies: Movie[];
      recentOpenMovies: Movie[];
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
    cast: string;
  };

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
            paddingBottom: 40,
            minHeight: isLandscape ? height + 550 : height + 560,
              paddingHorizontal: 20,
          }}
        >

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

            <View className={`${isLandscape ? 'mt-4' : 'mt-10'}`}>
                <SearchBar2 placeholder={"Search MMFF Movies"} onPress={() => {
                    router.push("/search");
                }}/>
            </View>


          <SampleLatest data={latestMovies} />
          <SampleTop data={topRatedMovies} />
          <SampleRecent data={recentOpenMovies} />

        </ScrollView>
      </View>
    </>
  );
};

export default Index;
