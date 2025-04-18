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

const Index = () => {
  const router = useRouter();
  const { user } = useAppContext();

  // const {
  //     data: movies,
  //     loading: moviesLoading,
  //     error: moviesError,
  // } = useFetch(() => fetchMovies({ query: "" }));

  return (
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
          <SearchBar/>
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
