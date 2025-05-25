import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  FlatList,
  Dimensions,
    StyleSheet,
    useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";

import { useAppContext } from "./../context/appContext";
import SampleRecent from "@/components/SampleRecent";
import React, { useState } from "react";
import SampleTop from "@/components/SampleTop";
import SampleLatest from "@/components/SampleLatest";
import Discover from "@/components/Discover";
import {images, } from "@/constansts/images";
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

    const styles = StyleSheet.create({
        landscapeImage: {
            width: 48,
            marginTop: 28,
            height: 42,
            marginHorizontal: 'auto',
        },
        portraitImage: {
            width: 48,
            height: 42,
            marginTop: 64,
            marginBottom: 20,
            marginHorizontal: 'auto',
        },
    });

    return (
    <>
    <ScrollView
        style={{ backgroundColor: "#282828", flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 150,
            minHeight: isLandscape ? height + 550 : height + 670,
        }}
    >

      <View style={{flex: 1, backgroundColor: "#282828"}}>

          <Image
              source={images.upperhome}
              style={{
                  position: 'absolute',
                  width: '100%',
                  zIndex: 0,
              }}
              resizeMode="cover"
          />

            <View className="justify-center items-center">
                <Image
                    source={icons.splashicon}
                    style={isLandscape ? styles.landscapeImage : styles.portraitImage}
                />
            </View>

          <SampleLatest data={latestMovies} />
          <SampleTop data={topRatedMovies} />
          <Discover data={movies} />
          <SampleRecent data={recentOpenMovies} />

      </View>
    </ScrollView>
    </>
  );
};

export default Index;
