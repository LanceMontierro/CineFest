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

                    <View className="mt-6 w-[412] h-[121] bg-[#787878] rounded-[17]">
                        <Text>hello</Text>
                    </View>

        </View>
    )
}
export default Saved
