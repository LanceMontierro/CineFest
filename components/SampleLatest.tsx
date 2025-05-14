import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useRouter } from "expo-router";
import { useAppContext } from "@/app/context/appContext";

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

interface TrendingMoviesProps {
  data: Movie[];
}

const { width } = Dimensions.get("window");

const MovieCard = ({ item, cardWidth }: { item: Movie; cardWidth: number }) => {
  const router = useRouter();
  const { addToRecentlyViewedMovies } = useAppContext();

  const handlePress = () => {
    router.push({
      pathname: "/MovieDetails/[d]",
      params: {
        d: item.title,
        title: item.title,
        description: item.description,
        poster: item.poster,
        genre: item.genre,
        releaseDate: item.releaseDate,
        rating: item.rating,
        awards: item.awards,
        link: item.link,
        cast: item.cast,
      },
    });
    addToRecentlyViewedMovies(item);
  };

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <View className="items-center justify-center">
        <Image
          source={{ uri: item.poster }}
          style={{
            width: isLandscape ? cardWidth * 1.1 : cardWidth * 1.5,
            height: cardWidth * 2,
            borderRadius: 14,
            borderWidth: 2,
            borderColor: '#000000'
          }}
          resizeMode="cover"
        />
        <View className="flex-row">
            <Text className="text-white text-xl mt-2 text-center">
              {item.title  && item.title.length > 30
                  ? item.title.slice(0, 20) + "..."
                  : item.title || "No Title"} |  {new Date(item.releaseDate).getFullYear()}
            </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function TrendingMovies({ data }: TrendingMoviesProps) {
  const cardWidth = width * 0.45;
  const { height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View>
      <Text className="text-white text-xl mt-4 mb-6 ml-4 font-bold">
        Latest MMFF
      </Text>
      <View
        className={`${
          isLandscape
            ? "justify-center items-center"
            : "justify-center items-center"
        }`}
      >
        {data.length === 0 ? (
          <Text className="text-white ml-4">No Latest MMFF available.</Text>
        ) : (
          <Carousel
            loop
            width={width * 1.15}
            height={cardWidth * 2.1}
            autoPlay={false}
            data={data}
            scrollAnimationDuration={800}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: cardWidth * 1.2,
            }}
            renderItem={({ item }) => (
              <MovieCard item={item} cardWidth={cardWidth} />
            )}
          />
        )}
      </View>
    </View>
  );
}
