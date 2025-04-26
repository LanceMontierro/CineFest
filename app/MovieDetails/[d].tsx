import {View, Text, Image, ScrollView, Linking, TouchableOpacity, Dimensions} from 'react-native';
import {router, useLocalSearchParams} from 'expo-router';
import {icons} from "@/constansts/icons";
import {LinearGradient} from "expo-linear-gradient";
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

    const [liked, setLiked] = useState(false);

    const {width, height} = Dimensions.get('window');

    return (
        <View className="bg-[#282828] flex-1">
                <View>
                    <Image
                        source={{ uri: poster as string }}
                        style={{ width: width, height: height * 0.55 }}
                    />

                    <View className="absolute right-5 z-50 bg-[#404040] px-4 py-3 rounded-b-3xl ">
                    <TouchableOpacity
                        onPress={() => setLiked(!liked)}
                        className="items-center justify-center active:scale-95 z-10"
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
                        colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(40,40,40,1)']}
                        style={{width, height: height * 0.40}}
                        start={{x: 0.5, y: 0}}
                        end={{x: 0.5, y: 1}}
                        className="absolute bottom-0"
                    />


                </View>

                <View className="justify-center items-center space-y-3">
                    <Text className="text-[#FAFAFA] text-center text-3xl font-bold tracking-wider px-5 ">{title}</Text>
                    <View className="flex-row justify-center">
                        <Text className="text-neutral-400 font-semibold text-base text-center">
                            {releaseDate}
                        </Text>
                        <Text className="text-neutral-400 font-semibold text-base text-center"> • </Text>
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
                        <Text className="text-neutral-400 font-semibold text-base text-center"> • </Text>
                        <Text className="text-neutral-400 font-semibold text-base text-center">
                            {rating}
                        </Text>
                        <Image source={icons.star} className="size-4 ml-1 mt-1" />
                    </View>


                    <View className=" flex-row flex-wrap justify-center items-center mt-2 rounded-md px-5 py-3 self-center">
                        <Text className="text-neutral-400 mb-3 font-bold ">
                            Awards:
                        </Text>

                        <Text></Text>

                        {(Array.isArray(awards) ? awards : awards?.split(",") || []).map(
                            (item: string, index: number) => (
                                <View key={index} className="flex-row items-center">
                                    <Text className="text-[#FAFAFA]">{item}</Text>
                                    {index !== (Array.isArray(awards) ? awards.length - 1 : awards.split(",").length - 1) && (
                                        <Text className="text-[#FAFAFA] mx-1">|</Text>
                                    )}
                                </View>
                            )
                        )}
                    </View>

                    <View className="mt-2 justify-center items-center px-5">
                        <Text className="text-neutral-400 mb-3 font-bold">
                            Description
                        </Text>
                        <ScrollView contentContainerStyle={{ paddingBottom: 80, minHeight: description.length * 2.2 }}>
                            <Text className="text-white font-bold text-sm text-center">
                            {description}
                            </Text>
                        </ScrollView>
                    </View>
                </View>


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
