import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import RatingsF from "@/components/RatingsF";
import YearF from "@/components/YearF";
import GenreF from "@/components/GenreF";
import { images } from "@/constansts/images";
import Awards from "@/components/Awards";
import { useRouter } from "expo-router";
import { icons } from "@/constansts/icons";
import { useAppContext } from "./../context/appContext";
import down from "@/assets/icons/Left.png";

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

const Saved = ({ item }: { item: Movie }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showFilters2, setShowFilters2] = useState(false);

  const { favortiteMovies } = useAppContext();
  const router = useRouter();

  const handlePress = (item: any) => {
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
  };

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
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

      <View
        className={`${
          isLandscape
            ? "px-36 flex-row justify-between items-center mt-2"
            : "px-5 flex-row justify-between items-center mt-5"
        }`}
      >
        <Text className="text-white font-semibold ml-7 mb-4">
          Saved ({favortiteMovies.length})
        </Text>

        <TouchableOpacity
          className="bg-[#D9D9D9] rounded-[20] flex-row w-[100] h-[37] mb-2 justify-center items-center"
          onPress={() => setShowFilters(!showFilters)}
          style={{borderWidth: 2, borderColor: '#000000',}}
        >
          <Text className="text-[10px] text-black mr-1">Genre/Awards</Text>
            <Image
                source={icons.down}
                className="w-5 h-5"
                resizeMode="contain"
            />
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-[#D9D9D9] flex-row rounded-[20] w-[100] h-[37] mb-2 justify-center items-center "
          onPress={() => setShowFilters2(!showFilters2)}
          style={{borderWidth: 2, borderColor: '#000000',}}
        >
          <Text className="text-[10px] text-black mr-1">Year/Rating</Text>
            <Image
                source={icons.down}
                className="w-5 h-5"
                resizeMode="contain"
            />
        </TouchableOpacity>
      </View>

      <View className="px-5">
        {showFilters && <GenreF />}
        {showFilters && <Awards />}
      </View>

      <View className="px-5">
        {showFilters2 && <YearF />}
        {showFilters2 && <RatingsF />}
      </View>

      <ScrollView
        className="space-y-3 px-5 mt-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: Math.max(
            height,
            isLandscape
              ? favortiteMovies.length * 135
              : favortiteMovies.length * 140
          ),
          paddingBottom: 15,
        }}
      >
        <View className="justify-between items-center">
          {favortiteMovies.length === 0 ? (
            <Text className="text-white text-lg mt-10">
              No saved movies yet.
            </Text>
          ) : (
            favortiteMovies.map((item: any, index: any) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => handlePress(item)}
              >
                <View
                  style={{
                    backgroundColor: "#787878",
                    width: 320,
                    height: 109,
                    borderRadius: 20,
                    marginBottom: 4,
                    shadowColor: "#9e9e9e",
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.4,
                    shadowRadius: 10,
                    elevation: 12,
                  }}
                >
                  <View className="flex-row justify-between items-center p-4 px-5 rounded-b-3xl">
                    <Image
                      source={{ uri: item.poster }}
                      className="w-[123] h-[82] rounded-[16]"
                    />
                    <View className="flex-1 ml-4">
                      <Text
                        className="text-white font-bold text-base"
                        numberOfLines={1}
                      >
                        {item.title}
                      </Text>
                      <Text
                        className="text-white text-sm mt-1"
                        numberOfLines={1}
                      >
                        {Array.isArray(item.genre)
                          ? item.genre.join(", ")
                          : item.genre}{" "}
                        • {item.releaseDate}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Saved;
