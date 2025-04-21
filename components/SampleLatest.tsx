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
        <View className="rounded-2xl justify-center items-center">
            <Image
                source={images.blank}
                style={{ width: 150, height: 250, borderRadius: 10 }}
                resizeMode="cover"
            />
            <Text className="text-white text-base font-semibold mt-2">
                {item.title}
            </Text>
        </View>
        </TouchableOpacity>
    );
};

export default function SampleLatest({ data }: TrendingMoviesProps) {
    return (
        <View>
            <Text className="text-white text-xl mt-4 mb-6 ml-4">Latest MMFF</Text>

            <Carousel
                width={width}
                height={300}
                data={data}
                scrollAnimationDuration={600}
                renderItem={({ item }) => <MovieCard item={item} />}
                mode="horizontal-stack"
                modeConfig={{

                }}
            />


        </View>

    );
}
