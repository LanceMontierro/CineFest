import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import {images} from "@/constansts/images";
import {icons} from "@/constansts/icons";
import {useAppContext} from "@/app/context/appContext";

const SAdmin = () => {

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
                <View className="flex-row pt-28 justify-between">
                    <Text className="text-lg text-[#D9D9D9] font-bold mt-5 mb-3 mr-16">
                        MMFF movies
                    </Text>
                    <TouchableOpacity>
                        <View className="flex-row mt-2 w-[180] h-[48] bg-[#404040] rounded-[60]">
                            <Image source={icons.Sync} className="ml-5"/>
                            <Text className="mt-4 ml-3 text-[#D9D9D9]">Upload Movie</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
export default SAdmin
