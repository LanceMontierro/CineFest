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
import {useState} from "react";
import MovieCard from "@/components/MovieCard";
import SampleTop from "@/components/SampleTop";
import SampleLatest from "@/components/SampleLatest";
import SearchBar2 from "@/components/SearchBar2";
import {useNavigation} from "@react-navigation/native";
import {icons} from "@/constansts/icons";

const Index = () => {

  const navigation = useNavigation();
  const sampleMovies = [
    {
      id: '1',
      title: 'Movie One',
    },
    {
      id: '2',
      title: 'Movie Two',
    },
    {
      id: '3',
      title: 'Movie Three',

    },
  ];

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

  // const {
  //     data: movies,
  //     loading: moviesLoading,
  //     error: moviesError,
  // } = useFetch(() => fetchMovies({ query: "" }));
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
              <Image source={icons.splashicon} className="w-12 h-10 mt-16 mb-3 mx-auto" />
            </View>


            <View className="mt-7 px-5">
              <SearchBar2 onPress={() => router2.replace("/search")} placeholder={"Search MMFF movies"}              />
            </View>

          <ScrollView
              className="flex-1 mt-4"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ minHeight: "113%", paddingBottom: 10 }}
          >

            <View className="mt-1">

              <SampleRecent data={sampleMovies} />
              <SampleTop data={sampleMovies} />
              <SampleLatest data={sampleMovies} />
            </View>

          </ScrollView>
        </View>

      </>

      // <View className="flex-1 bg-[#282828]">
      //     <Image
      //         source={images.upperhome}
      //         className="absolute w-full z-0"
      //         resizeMode="cover"
      //     />

      //         <ScrollView
      //         className="flex-1 px-5"
      //         showsVerticalScrollIndicator={false}
      //         contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      //     >
      //             {moviesLoading? (
      //                 <ActivityIndicator
      //                     size="large"
      //                     color="#0000ff"
      //                     className="mt-10 self-center"
      //                 />
      //             ) : moviesError? (
      //                     <Text>Error: {moviesError?.message}</Text>
      //                 ):

      //             <View className="flex-1 mt-5 pt-28">
      //                 <SearchBar
      //                     onPress={() => {
      //                         router.push("/search");
      //                     }}
      //                     placeholder="Search MMFF movie"
      //                 />

      //                 <>
      //                     <Text className="text-lg text-white font-bold mt-5 mb-3">
      //                         Latest MMFF Movies
      //                     </Text>

      //                     <FlatList
      //                         data={movies}
      //                         renderItem={({ item }) => <MovieCard {...item} />}
      //                         keyExtractor={(item) => item.id.toString()}
      //                         numColumns={3}
      //                         columnWrapperStyle={{
      //                             justifyContent: "flex-start",
      //                             gap: 20,
      //                             paddingRight: 5,
      //                             marginBottom: 10,
      //                         }}
      //                         className="mt-2 pb-32"
      //                         scrollEnabled={false}
      //                     />
      //                 </>
      //             </View>
      //             }
      //     </ScrollView>

      // </View>
  );
};

export default Index;