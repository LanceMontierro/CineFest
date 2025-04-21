import {
    View,
    Text,
    Image,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppContext } from "../context/appContext";
import { icons } from "@/constansts/icons";
import {images} from "@/constansts/images";

const MovieInfo = ({ label, value }:{label: any; value: any}) => (
    <View className="flex-col items-start justify-center mt-5">
        <Text className="text-light-200 font-normal text-sm">{label}</Text>
        <Text className="text-light-100 font-bold text-sm mt-2">
            {value || "N/A"}
        </Text>
    </View>
);

const Details = () => {
    const router = useRouter();

    return (
        <View className="bg-[#282828] flex-1">
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                <View>
                    <Image
                        source={images.blank}
                        className="w-full h-[350px]"
                        resizeMode="stretch"
                    />
                    <TouchableOpacity className="absolute bottom-5 right-5 rounded-full size-14 bg-white flex items-center justify-center">
                        <Image source={icons.save2} className="w-6 h-7"/>
                    </TouchableOpacity>
                </View>

                <View className="flex-col items-start justify-center mt-5 px-5">
                    <Text className="text-white font-bold text-xl">Title</Text>
                    <View className="flex-row items-center gap-x-1 mt-2">
                        <Text className="text-[#D9DFF2] text-light-200 text-sm">
                            Realease_date
                        </Text>
                        <Text className="text-[#D9DFF2] text-light-200 text-sm">Duration</Text>
                    </View>

                    <View className="flex-row items-center py-1 rounded-md gap-x-1 mt-2">
                        <Image source={icons.star} className="size-4" />
                        <Text className="text-white font-bold text-sm">
                           Rating
                        </Text>
                    </View>

                    <View className="items-center py-1 rounded-md gap-x-1 mt-2">
                        <Text className="text-white font-bold text-sm">
                            Genre
                        </Text>
                    </View>

                    <View className="items-center py-1 rounded-md gap-x-1 mt-2">
                        <Text className="text-white font-bold text-sm">
                            Description
                        </Text>
                    </View>

                    <View className="items-center py-1 rounded-md gap-x-1 mt-2">
                        <Text className="text-white font-bold text-sm">
                            Awards
                        </Text>
                    </View>

                    <View className="items-center py-1 rounded-md gap-x-1 mt-2">
                        <Text className="text-white font-bold text-sm">
                            Link
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity
                className="bg-[#404040] rounded-2xl absolute mt-[700] left-0 right-0 mx-5 py-3.5 flex flex-row items-center justify-center z-50"
                onPress={router.back}
            >
                <Image source={icons.arrow} className="size-5 mr-1 mt-0.5 rotate-180" tintColor="#fff" />
                <Text className="text-[#D9DFF2] font-semibold text-base">Visit Home Page</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Details;
