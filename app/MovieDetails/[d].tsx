import {View, Text, Image, ScrollView, Linking, TouchableOpacity, Dimensions} from 'react-native';
import {router, useLocalSearchParams} from 'expo-router';
import {icons} from "@/constansts/icons";
import {LinearGradient} from "expo-linear-gradient";
import {isTransparent} from "@clerk/shared";
import {useState} from "react";

export default function MovieDetails() {
    const {
        title,
        poster,
        description,
        genre,
        releaseDate,
        rating,
        awards,
        link,
    } = useLocalSearchParams();

    const {width, height} = Dimensions.get ('window');

    const [liked, setLiked] = useState(false);

    return (
        <View className="bg-[#282828] flex-1">
            <ScrollView  showsVerticalScrollIndicator={false} contentContainerStyle={{  minHeight:"110%"} }>
                <View>
                    <Image
                        source={{ uri: poster as string }}
                        style={{width, height: height * 0.55}}

                    />

                    <View className="bg-[#404040] rounded-b-3xl px-4 py-4 absolute right-5 items-center justify-center z-50">
                    <TouchableOpacity
                        onPress={() => setLiked(!liked)}
                        activeOpacity={0.8}
                    >
                        <Image
                            source={liked
                                ? require('@/assets/icons/Bookmark2.png')
                                : require('@/assets/icons/Bookmark1.png')
                            }
                            className="w-10 h-10"
                        />
                    </TouchableOpacity>
                    </View>
                    <LinearGradient
                        colors={['transparent','rgba(23, 23, 23, 0.8)', 'rgba(40, 40, 40, 1)']}
                        style={{width, height: height * 0.40}}
                        start={{x: 0.5, y: 0}}
                        end={{x: 0.5, y:1}}
                        className="absolute bottom-0"
                    />

                </View>

                <View className="mt-[-50]">
                    <Text className="text-[#FAFAFA] text-center text-3xl font-bold tracking-wider px-5">{title}</Text>
                    <View className="flex-row justify-center items-center gap-x-1 mt-2 ">
                        <Text className="text-neutral-400 font-semibold text-center text-base">
                            {releaseDate} •
                        </Text>
                        <View className="flex-row flex-wrap justify-center items-center">
                            {(Array.isArray(genre) ? genre : genre?.split(",").map(item => item.trim()) || []).map(
                                (item: string, index: number) => (
                                    <View key={index} className="flex-row items-center">
                                        <Text className="text-neutral-400 text-base text-center">{item}</Text>
                                        {index !== (Array.isArray(genre) ? genre.length - 1 : genre.split(",").length - 1) && (
                                            <Text className="text-neutral-400 text-base text-center mx-1">|</Text>
                                        )}
                                    </View>
                                )
                            )}
                        </View>
                        <Text className="text-neutral-400 font-semibold text-center text-base">
                            • {rating}
                        </Text>
                        <Image source={icons.star} className="size-4" />
                    </View>

                    <View className=" flex-row flex-wrap justify-center items-center mt-2 rounded-md px-5 py-3 self-center">
                        <Text className="text-[#FAFAFA] font-semibold text-center text-base">
                            Awards:
                        </Text>
                        <Text></Text>
                        {(Array.isArray(awards) ? awards : awards?.split(",") || []).map(
                            (item: string, index: number) => (
                                <View key={index} className="flex-row items-center">
                                    <Text className="text-neutral-400">{item}</Text>
                                    {index !== (Array.isArray(awards) ? awards.length - 1 : awards.split(",").length - 1) && (
                                        <Text className="text-neutral-400 mx-1">|</Text>
                                    )}
                                </View>
                            )
                        )}
                    </View>


                        <Text className="text-[#FAFAFA] font-bold text-sm mb-2 text-center">
                            Description
                        </Text>

                        <Text className="text-neutral-400 text-center px-5">
                            {description}
                        </Text>


                    <View className=" flex-row flex-wrap justify-center items-center mt-2 rounded-md px-5 py-3 self-center">
                        <Text className="text-[#FAFAFA] font-semibold text-center text-base">
                            Cast
                        </Text>
                    </View>

                    <View className=" flex-row flex-wrap justify-center items-center mt-2 rounded-md px-5 py-3 self-center">
                        <TouchableOpacity>
                        <Text className="text-[#FAFAFA] font-semibold text-center text-base">
                            {link?.length > 0 ? "Watch Trailer" : "No Trailer Available"}
                        </Text>
                        </TouchableOpacity>
                    </View>


                </View>
        </ScrollView>
            <TouchableOpacity
                className="bg-[#404040] absolute bottom-5 mb-14 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
                onPress={router.back}
            >
                <Image
                    source={icons.arrow}
                    className="size-5 mr-1 mt-0.5 rotate-180"
                    tintColor="#fff"
                />
                <Text className="text-white font-semibold text-base">Go Back</Text>
            </TouchableOpacity>
        </View>
    );
}
