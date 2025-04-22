import React from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { images } from '@/constansts/images';
import {useRouter} from "expo-router";

interface Movie {
    id: string;
    title: string;
}

interface TrendingMoviesProps {
    data: Movie[];
}

const { width } = Dimensions.get('window');

const MovieCard = ({ item }: { item: Movie }) => {

    const router = useRouter();

    const handlePress = () => {
        router.push("/MovieDetails/[d]");
    };

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
            <View className="items-center justify-center">
                <Image
                    source={images.blank}
                    style={{ width: 180, height: 250, borderRadius: 10 }}
                />
            </View>
        </TouchableOpacity>
    );
};

export default function SampleTop({ data }: TrendingMoviesProps) {

    return (
        <View>

            <Text className="text-white text-xl mt-4 mb-6 ml-4">Top Rated</Text>

            <Carousel
                loop
                width={width}
                height={200}
                autoPlay={false}
                data={data}
                scrollAnimationDuration={800}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 220,
                }}
                renderItem={({ item }) => (
                    <MovieCard item={item} />
                )}

            />

        </View>

    );
}