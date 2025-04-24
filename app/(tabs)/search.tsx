import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ActivityIndicator,
    FlatList,
    Image,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions
} from "react-native";
import {images} from "@/constansts/images";
import SearchBar from "@/components/SearchBar";
import {icons} from "@/constansts/icons";
import GenreF from "@/components/GenreF";
import YearF from "@/components/YearF";
import RatingsF from "@/components/RatingsF";
import {useRouter} from "expo-router";

// import { images } from "@/constansts/images";

// import useFetch from "@/services/useFetch";
// import { fetchMovies } from "@/services/api";

// import SearchBar from "@/components/SearchBar";
// import MovieDisplayCard from "@/components/MovieCard";

const Search = () => {
  // const [searchQuery, setSearchQuery] = useState("");

  // const {
  //     data: movies = [],
  //     loading,
  //     error,
  //     refetch: loadMovies,
  //     reset,
  // } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  // const handleSearch = (text: string) => {
  //     setSearchQuery(text);
  // };

  // useEffect(() => {
  //     const timeoutId = setTimeout(async () => {
  //         if (searchQuery.trim()) {
  //             await loadMovies();

  //         } else {
  //             reset();
  //         }
  //     }, 500);

  //     return () => clearTimeout(timeoutId);
  // }, [searchQuery]);

    const [result, setResult] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const {width, height} = Dimensions.get('window');

    const router = useRouter();

    const handlePress = () => {
        router.push("/MovieDetails/[d]");
    };

  return (
      <View className="flex-1 bg-[#282828]">
          <Image
              source={images.upperhome}
              className="absolute w-full z-0"
              resizeMode="cover"
          />

          <View className="justify-center items-center">
              <Image source={icons.splashicon} className="w-12 h-10 mt-16 mb-5 mx-auto" />
          </View>

          <View className="mt-10 px-5">
              <SearchBar/>

          </View>


          <ScrollView
              className="flex-1 px-5 mt-4"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ minHeight: "195%", paddingBottom: 15}}
          >
              <Text className="text-white font-semibold ml-7 mb-4">Result({result.length})</Text>
              <View className="flex-row flex-wrap justify-between">
                  {
                    result.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback
                            key={index}
                            onPress={handlePress}

                            >
                                <View className="space-y2 mb-4">
                                    <Image
                                    source={images.blank}
                                    style={{width:  width * 0.44, height: height * 0.3, borderRadius: 10}}
                                    />
                                    <Text className="text-white font-bold text-sm">
                                        Movie Title
                                    </Text>
                                    <Text className="text-white font-bold text-sm">
                                       Genre & Year
                                    </Text>
                                </View>

                            </TouchableWithoutFeedback>
                        )
                    })
                  }

              </View>

          </ScrollView>
      {/* <Image
                source={images.upperhome}
                className="flex-1 absolute w-full z-0"
                resizeMode="cover"
            />

            <FlatList
                className="px-5"
                data={movies as Movie[]}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MovieDisplayCard {...item} />}
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: "flex-start",
                    gap: 16,
                    marginVertical: 16,
                }}
                contentContainerStyle={{ paddingBottom: 100 }}
                ListHeaderComponent={
                    <>
                        <View className="w-full flex-row justify-center mt-20 items-center">
                            <Image className="w-12 h-10" />
                        </View>

                        <View className="my-5">
                            <SearchBar
                                placeholder="Search MMFF movie"
                                value={searchQuery}
                                onChangeText={(text) => setSearchQuery(text)}
                            />
                        </View>

                        {loading && (
                            <ActivityIndicator
                                size="large"
                                color="#0000ff"
                                className="my-3"
                            />
                        )}

                        {error && (
                            <Text className="text-red-500 px-5 my-3">
                                Error: {error.message}
                            </Text>
                        )}

                        {!loading &&
                            !error &&
                            searchQuery.trim() &&
                            movies?.length! > 0 && (
                                <Text className="text-xl text-white font-bold">
                                    Search Results for{" "}
                                    <Text className="text-accent">{searchQuery}</Text>
                                </Text>
                            )}
                    </>
                }
            /> */}

    </View>
  );
};

export default Search;
