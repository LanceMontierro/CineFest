import { View, Text, Image } from "react-native";

const MovieCard = ({ movie }: {movie: any}) => {
    return (
        <View className="mb-4 flex-row bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-md">
            <Image
                source={{ uri: movie.poster }}
                className="w-24 h-36 rounded-l-2xl"
                resizeMode="cover"
            />
            <View className="flex-1 p-3 justify-center">
                <Text className="text-white text-base font-semibold">
                    {movie.title}
                </Text>
                <Text className="text-gray-400 text-sm mt-1">{movie.genre}</Text>
                <Text className="text-gray-500 text-xs mt-1">
                    {new Date(movie.releaseDate).toLocaleDateString()}
                </Text>
            </View>
        </View>
    );
};

export default MovieCard;
