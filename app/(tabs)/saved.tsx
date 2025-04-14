import {View, Text, Image,  ScrollView} from 'react-native'
import React from 'react'
import {images} from "@/constansts/images";
import GenreF from "@/components/GenreF";
import YearF from "@/components/YearF";
import AwardsF from "@/components/AwardsF";

const Saved = () => {
    return (
        <View className="flex-1 bg-[#282828]">
            <Image
                source={images.upperhome}
                className="absolute w-full z-0"
                resizeMode="cover"
            />

            <ScrollView
                className="flex-1 px-5"
                showsVerticalScrollIndicator={false}
            >

            <Text className="text-2xl text-white font-bold mt-32 ml-2">
                Saved
            </Text>

            <GenreF/>
            <YearF/>
            <AwardsF/>
            </ScrollView>
        </View>
    )
}
export default Saved
