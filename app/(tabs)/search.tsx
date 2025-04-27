import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    Dimensions,
} from "react-native";
import { images } from "@/constansts/images";
import { icons } from "@/constansts/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import { useAppContext } from "./../context/appContext";
import GenreF from "@/components/GenreF";
import Awards from "@/components/Awards";
import YearF from "@/components/YearF";
import RatingsF from "@/components/RatingsF";

const Search = () => {
    const { movies } = useAppContext();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredMovies, setFilteredMovies] = useState<any[]>([]);

    const { width, height } = Dimensions.get('window');
    const router = useRouter();

    useEffect(() => {

        if (searchQuery.trim() === "") {
            setFilteredMovies(movies.slice(0, 10));
        } else {
            const filtered = movies.filter((movie: any) =>
                movie.title?.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredMovies(filtered);
        }
    }, [searchQuery, movies]);

    const handlePress = (movie: any) => {
        router.push({
            pathname: "/MovieDetails/[d]",
            params: {
                d: movie.title,
                title: movie.title,
                description: movie.description,
                poster: movie.poster,
                genre: movie.genre || "Unknown",
                releaseDate: movie.releaseDate || "Unknown",
                rating: movie.rating || "N/A",
                awards: movie.awards || "None",
                link: movie.link || "",
            },
        });
    };

    const [showFilters, setShowFilters] = useState(false);
    const [showFilters2, setShowFilters2] = useState(false);

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
                <SearchBar
                    placeholder="Search MMFF movies"
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    onFilterPress={() => setShowFilters(!showFilters)}
                    onFilter2Press={() => setShowFilters2(!showFilters2)}
                />
                {(showFilters || showFilters2) && (
                    <View className="px-5 mt-2 space-y-2">
                        {showFilters && (
                            <>
                                <GenreF/>
                                <Awards/>
                            </>
                        )}
                        {showFilters2 && (
                            <>
                                <YearF/>
                                <RatingsF/>
                            </>
                        )}
                    </View>
                )}
            </View>



            <ScrollView
                className="flex-1 px-5 mt-4"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ minHeight: "195%", paddingBottom: 15 }}
            >
                <Text className="text-white font-semibold ml-7 mb-4">
                    Result ({filteredMovies.length})
                </Text>

                {filteredMovies.length === 0 && (
                    <Text className="text-center text-white text-lg mt-10">
                        No movies found.
                    </Text>
                )}

                <View className="flex-row flex-wrap justify-between ">
                    {filteredMovies.map((movie, index) => (
                        <TouchableWithoutFeedback
                            key={index}
                            onPress={() => handlePress(movie)}
                        >
                            <View className="space-y-2 mb-4 justify-center items-center">
                                <Image
                                    source={{ uri: movie.poster || images.blank }}
                                    style={{width:  width * 0.43, height: height * 0.3, borderRadius: 10}}
                                />
                                <Text className="text-white font-bold text-sm mt-2 ">
                                    {movie.title || "No Title"}
                                </Text>
                                <Text className="text-white font-bold text-sm  mt-2">
                                    {(movie.rating || "Genre Unknown") +
                                        " • " +
                                        (movie.releaseDate ? new Date(movie.releaseDate).getFullYear() : "Unknown")}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default Search;
