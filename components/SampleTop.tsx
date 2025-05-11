import React from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, useWindowDimensions, FlatList} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useRouter } from "expo-router";
import {useAppContext} from "@/app/context/appContext";

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

interface TrendingMoviesProps {
    data: Movie[];
}

const { width } = Dimensions.get('window');


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
            },
        });
        addToRecentlyViewedMovies(item);
    };

    const {width, height } = useWindowDimensions();
    const isLandscape = width > height;

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
            <View className="items-center justify-center">
                <Image
                    source={{ uri: item.poster }}
                    style={{ width: isLandscape ? cardWidth * 1.1 :cardWidth, height: cardWidth * 1.4, borderRadius: 10 }}
                    resizeMode="cover"
                />
                <Text className="text-white text-sm mt-2 text-center">{item.title}</Text>
                <Text className="text-white text-xs">⭐ {item.rating}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default function TrendingMovies({ data }: TrendingMoviesProps) {
    const cardWidth = width * 0.45;
    const { height } = useWindowDimensions();
    const isLandscape = width > height;

    return (
        <View className="mt-5">
            <Text className="text-white text-xl mt-4 mb-6 ml-4 font-bold">Top Rating</Text>
            <View className={`${isLandscape ? 'justify-center items-center' : 'justify-center items-center'}`}>
            {data.length === 0 ? (
                <Text className="text-white ml-4">No Top Rating available.</Text>
            ) : (
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <MovieCard item={item} cardWidth={cardWidth} />
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 10,
                        gap: 20,
                    }}
                    className="mt-2"
                />
            )}
                </View>
        </View>
    );
}
