import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import RatingsF from "@/components/RatingsF";
import YearF from "@/components/YearF";
import GenreF from "@/components/GenreF";
import {images} from "@/constansts/images";

const Saved = () => {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <View className="flex-1 bg-[#282828]">
            <Image
                source={images.upperhome}
                className="absolute w-full z-0"
                resizeMode="cover"
            />

            <View className="px-5">
            <TouchableOpacity
                className="bg-[#D9D9D9] rounded-[20] place-self-start w-[100] h-[37] justify-center items-center mt-16 ml-7"
                onPress={() => setShowFilters(!showFilters)}
            >
                <Text className="text-[16] text-black">Filter</Text>
            </TouchableOpacity>

                {showFilters && <GenreF />}
                {showFilters && <YearF />}
                {showFilters && <RatingsF />}

            </View>

            <View>

            </View>

        </View>
    );
};

export default Saved;
