import {View, Text, Image} from 'react-native'
import React from 'react'
import {images} from "@/constansts/images";

const Saved = () => {
    return (
        <View className="flex-1 bg-[#282828]">
            <Image
                source={images.upperhome}
                className="absolute w-full z-0"
                resizeMode="cover"
            />

            <Text className="text-2xl text-white font-bold mt-32 ml-10">
                Saved
            </Text>

        </View>
    )
}
export default Saved
