import React from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, useWindowDimensions, FlatList} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useRouter } from "expo-router";
import {useAppContext} from "@/app/context/appContext";
import MaskedView from "@react-native-masked-view/masked-view";
import {images} from "@/constansts/images";

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


const MovieCard = ({
                       item,
                       cardWidth,
                       index,
                   }: {
    item: Movie;
    cardWidth: number;
    index: number;
}) => {
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
            <View className="items-center justify-center mt-[-90] mb-[-90]">
                <View className="flex-row items-center">
                    <View style={{ marginRight: -90 }} className="justify-center items-center">
                        <MaskedView
                            maskElement={
                                <Text className="font-extrabold text-[310px]">{index + 1}</Text>
                            }
                        >
                            <Image
                                source={images.rankingGradient}
                                resizeMode="cover"

                                style={{ height: cardWidth * 2.7}}
                            />
                        </MaskedView>
                    </View>
                    <View>
                        <Image
                            source={{ uri: item.poster }}
                            style={{
                                width: isLandscape ? cardWidth * 1.1 : cardWidth,
                                height: cardWidth * 1.4,
                                borderRadius: 10,
                                borderWidth: 2,
                                borderColor: '#000000',
                            }}
                            resizeMode="cover"
                        />
                        <Text className="text-white text-sm text-center">
                            {item.title && item.title.length > 30
                                ? item.title.slice(0, 20) + "..."
                                : item.title || "No Title"}{" "}
                        </Text>
                        <Text className="text-white text-center text-xs">⭐ {item.rating}</Text>
                    </View>
                </View>
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
                    renderItem={({ item,index }) => (
                        <MovieCard item={item} cardWidth={cardWidth}  index={index}/>
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
