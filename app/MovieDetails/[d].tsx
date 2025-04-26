import {View, Text, Image, ScrollView, Linking, TouchableOpacity} from 'react-native';
import {router, useLocalSearchParams} from 'expo-router';
import {icons} from "@/constansts/icons";

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

    return (
        <View className="bg-[#282828] flex-1">
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                <View>
                    <Image
                        source={{ uri: poster as string }}
                        className="w-full h-[430]"
                        resizeMode="stretch"
                    />

                    <TouchableOpacity className="absolute bottom-5 right-5 rounded-full size-14 bg-white flex items-center justify-center">
                        <Image
                            source={icons.save2}
                            className="w-6 h-7"
                            resizeMode="stretch"
                        />
                    </TouchableOpacity>
                </View>

                <View className="flex-col items-start justify-center mt-5 px-5">
                    <Text className="text-[#FAFAFA] font-bold text-xl">{title}</Text>
                    <View className="flex-row items-center gap-x-1 mt-2">
                        <Text className="text-[#FAFAFA] text-light-200 text-sm">
                            {releaseDate} •
                        </Text>
                        <Text className="text-[#FAFAFA] text-light-200 text-sm">{genre} •</Text>
                        <Image source={icons.star} className="size-4" />

                        <Text className="text-white font-bold text-sm">
                            {rating}
                        </Text>
                    </View>

                    <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
                        <Text className="bg-[#404040] w-[59] h-[24] text-white font-bold text-sm justify-center items-center rounded-md">
                            {awards}
                        </Text>
                    </View>

                    <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
                        <Text className="text-white font-bold text-sm">
                            {description}
                        </Text>
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
