import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import {images} from "@/constansts/images";
import {icons} from "@/constansts/icons";
import {useAppContext} from "@/app/context/appContext";
import { useState } from 'react';
import {router} from "expo-router";

const SAdmin = () => {

    const [showForm, setShowForm] = useState(false);

    const { user, movies } = useAppContext() as {
        user: any;
        movies: Movie[];
    };

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

    const { handleSignOut } = useAppContext();

    return (
        <View className="flex-1 bg-[#282828]">
            <Image
                source={images.dev}
                className="absolute w-full z-0"
                resizeMode="cover"
            />

            <TouchableOpacity onPress={handleSignOut}>
                <View className="ml-80 mt-5">
                    <Text className="font-bold text-red-900">Log Out</Text>
                </View>
            </TouchableOpacity>

            <ScrollView
                className="flex-1 px-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ minHeight: "100%"}}
            >
                <View className="flex-row mt-16 justify-between items-center ">
                    <Text className="text-lg text-[#D9D9D9] font-bold mt-5 mb-3 mr-16">
                        MMFF Movies
                    </Text>
                    <TouchableOpacity>
                        <View className="flex-row mt-2 w-[180] h-[48] bg-[#404040] rounded-[60]">
                            <Image source={icons.Sync} className="ml-5"/>
                            <Text className="mt-4 ml-3 text-[#D9D9D9]">Upload Movie</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <TouchableOpacity
                className="bg-[#404040] rounded-2xl absolute mt-[700] left-0 right-0 mx-5 py-3.5 flex flex-row items-center justify-center z-50"
                onPress={router.back}
            >
                <Image source={icons.arrow} className="size-5 mr-1 mt-0.5 rotate-180" tintColor="#fff" />
                <Text className="text-[#D9DFF2] font-semibold text-base">Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SAdmin
