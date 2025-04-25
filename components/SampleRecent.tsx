import React from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useRouter } from "expo-router";


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

    const handlePress = () => {
        router.push("/MovieDetails/[d]"); // Consider using a dynamic route with movie id/slug
    };

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
            <View className="items-center justify-center">
                <Image
                    source={{ uri: item.poster }}
                    style={{ width: cardWidth, height: cardWidth * 1.4, borderRadius: 10 }}
                    resizeMode="cover"
                />
                <Text className="text-white text-sm mt-2">{item.title}</Text>
                <Text className="text-white text-xs">⭐ {item.rating}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default function TrendingMovies({ data }: TrendingMoviesProps) {
    const cardWidth = width * 0.45;

    return (
        <View>
            <Text className="text-white text-xl mt-4 mb-6 ml-4">Top Rating</Text>

            {data.length === 0 ? (
                <Text className="text-white ml-4">No latest movies available.</Text>
            ) : (
                <Carousel
                    loop
                    width={width}
                    height={cardWidth * 1.4}
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
    );
}
