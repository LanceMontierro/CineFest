import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image, TouchableWithoutFeedback, ScrollView, Dimensions} from 'react-native';
import RatingsF from "@/components/RatingsF";
import YearF from "@/components/YearF";
import GenreF from "@/components/GenreF";
import {images} from "@/constansts/images";
import Awards from "@/components/Awards";
import {useRouter} from "expo-router";
import {icons} from "@/constansts/icons";

const Saved = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [result, setResult] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const router = useRouter();

    const handlePress = () => {
        router.push("/MovieDetails/[d]");
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
                    <Text className="text-white font-semibold ml-7 mb-4">Saved({result.length})</Text>
                    <TouchableOpacity
                        className="bg-[#D9D9D9] rounded-[20] place-self-start w-[100] h-[37] mb-2 justify-center items-center "
                        onPress={() => setShowFilters(!showFilters)}
                    >
                        <Text className="text-[16] text-black">Filter</Text>
                    </TouchableOpacity>

                </View>

            <View className="px-5">

                {showFilters && <GenreF />}
                {showFilters && <YearF />}
                {showFilters && <RatingsF />}
                {showFilters && <Awards />}

            </View>

            <ScrollView
                className="space-y-3 px-5 mt-4"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{minHeight: "170%", paddingBottom: 15}}
            >

                <View className=" justify-between items-center">
                    {
                        result.map((index) => {
                            return (
                                <TouchableWithoutFeedback
                                    key={index}
                                    onPress={handlePress}

                                >
                                    <View className="bg-[#787878] w-[320] px h-[109] rounded-[20] mb-4">
                                        <View className="flex-row justify-between items-center p-4 px-5 rounded-b-3xl">
                                            <Image
                                                source={images.blank}
                                                className="w-[123] h-[82] rounded-[16]"
                                                />
                                                <Text className="text-white font-bold text-sm text-left">
                                                    Movie Title
                                                </Text>
                                                <Text className="text-white font-bold text-sm">
                                                    Genre & Year
                                                </Text>
                                        </View>
                                    </View>


                                </TouchableWithoutFeedback>
                            )
                        })
                    }

                </View>

            </ScrollView>

        </View>
    );
};

export default Saved;
