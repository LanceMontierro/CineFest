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
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 40,
            minHeight: isLandscape ? height + 550 : height + 450,
          }}
        >
            <Image
                source={images.upperhome}
                className="absolute w-full z-0"
                resizeMode="cover"
            />



            {/*<View className={`${isLandscape ? "mt-4" : "mt-10"}`}>*/}
            {/*    <FlatList*/}
            {/*        data={IMAGES}*/}
            {/*        keyExtractor={(item, index) => index.toString()}*/}
            {/*        style={{width: 500}}*/}
            {/*        renderItem={({ item }) => (*/}
            {/*            <Image*/}
            {/*                source={item}*/}
            {/*                style={{ width: 100, height: 150, marginRight: 10 }}*/}
            {/*                resizeMode="cover"*/}
            {/*            />*/}
            {/*        )}*/}
            {/*        horizontal*/}
            {/*        showsHorizontalScrollIndicator={false}*/}
            {/*    />*/}

            {/*    <View className="flex-row justify-between items-center mt-4 px-8">*/}
            {/*    <Text style={{textAlign: 'right' }} className="text-white mr-4 mt-4">*/}
            {/*        NEW MMFFs*/}
            {/*    </Text>*/}
            {/*        <Text style={{textAlign: 'right' }} className="text-white mr-4 mt-4">*/}
            {/*            OLD MMFFs*/}
            {/*        </Text>*/}
            {/*    </View>*/}
            {/*</View>*/}

          <SampleLatest data={latestMovies} />
          <SampleTop data={topRatedMovies} />

          <SampleRecent data={recentOpenMovies} />
        </ScrollView>
      </View>
    </>
  );
};

export default Index;
