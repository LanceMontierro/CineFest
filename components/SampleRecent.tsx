import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { images } from '@/constansts/images';

interface Movie {
    id: string;
    title: string;
}

interface TrendingMoviesProps {
    data: Movie[];
}

const { width } = Dimensions.get('window');

const MovieCard = ({ item }: { item: Movie }) => {
    return (
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
    );
};

export default function SampleRecent({ data }: TrendingMoviesProps) {
    return (
        <View>
            <Text className="text-white text-xl mt-4 mb-6 ml-4">Recently View</Text>

            <Carousel
                width={width}
                height={300}
                data={data}
                scrollAnimationDuration={600}
                renderItem={({ item }) => <MovieCard item={item} />}
                mode="vertical-stack"
                modeConfig={{

                }}
            />


        </View>

    );
}
