import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';
import RatingsF from "@/components/RatingsF";
import YearF from "@/components/YearF";
import GenreF from "@/components/GenreF";
import { images } from "@/constansts/images";
import Awards from "@/components/Awards";
import { useRouter } from "expo-router";
import { icons } from "@/constansts/icons";
import { useAppContext } from "./../context/appContext";

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


const Saved = ({item}: {item: Movie}) => {
    const [showFilters, setShowFilters] = useState(false);
    const [showFilters2, setShowFilters2] = useState(false);

    const { favortiteMovies } = useAppContext();
    const router = useRouter();
    const { height } = Dimensions.get('window');

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
            },
        });
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

            <View className="px-5 flex-row justify-between items-center mt-5">
                <Text className="text-white font-semibold ml-7 mb-4">Saved ({favortiteMovies.length})</Text>

                <TouchableOpacity
                    className="bg-[#D9D9D9] rounded-[20] w-[100] h-[37] mb-2 justify-center items-center"
                    onPress={() => setShowFilters(!showFilters)}
                >
                    <Text className="text-[16] text-black">Filter-1</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="bg-[#D9D9D9] rounded-[20] w-[100] h-[37] mb-2 justify-center items-center"
                    onPress={() => setShowFilters2(!showFilters2)}
                >
                    <Text className="text-[16] text-black">Filter-2</Text>
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
                contentContainerStyle={{ minHeight: height + 20, paddingBottom: 15 }}
            >
                <View className="justify-between items-center">
                    {favortiteMovies.length === 0 ? (
                        <Text className="text-white text-lg mt-10">No saved movies yet.</Text>
                    ) : (
                        favortiteMovies.map((item: any, index: any) => (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => handlePress(item)}
                            >
                                <View className="bg-[#787878] w-[320] h-[109] rounded-[20] mb-4">
                                    <View className="flex-row justify-between items-center p-4 px-5 rounded-b-3xl">
                                        <Image
                                            source={{ uri: item.poster }}
                                            className="w-[123] h-[82] rounded-[16]"
                                        />
                                        <View className="flex-1 ml-4">
                                            <Text className="text-white font-bold text-base" numberOfLines={1}>
                                                {item.title}
                                            </Text>
                                            <Text className="text-white text-sm mt-1" numberOfLines={1}>
                                                {Array.isArray(item.genre) ? item.genre.join(", ") : item.genre} • {item.releaseDate}
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
