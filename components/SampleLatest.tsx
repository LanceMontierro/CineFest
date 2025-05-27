import React from "react";
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    useWindowDimensions,
    StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useRouter } from "expo-router";
import { useAppContext } from "@/app/context/appContext";

type Movie = {
    title: string;
    description: string;
    poster: string;
    genre: string;
    releaseDate: string;
    rating: string;
    awards: string;
    link: string;
    cast: string;
};

interface TrendingMoviesProps {
    data: Movie[];
}

const { width } = Dimensions.get("window");

const MovieCard = ({
                       item,
                       cardWidth,
                       index,
                   }: {
    item: Movie;
    cardWidth: number;
    index: number;
}) => {
    const router = useRouter();
    const { addToRecentlyViewedMovies } = useAppContext();

    const handlePress = () => {
        router.push({
            pathname: "/MovieDetails/[d]",
            params: {
                d: item.title,
                title: item.title,
                description: item.description,
                poster: item.poster,
                genre: item.genre,
                releaseDate: item.releaseDate,
                rating: item.rating,
                awards: item.awards,
                link: item.link,
                cast: item.cast,
            },
        });
        addToRecentlyViewedMovies(item);
    };

    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    return (
        <View style={styles.cardWrapper}>
            <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={{ uri: item.poster }}
                        style={{
                            width: isLandscape ? cardWidth * 1.4 : cardWidth * 1.5,
                            height: cardWidth * 2,
                            borderRadius: 14,
                            borderWidth: 2,
                            borderColor: "#000000",
                        }}
                        resizeMode="cover"
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>
                    {item.title && item.title.length > 30
                        ? item.title.slice(0, 20) + "..."
                        : item.title || "No Title"}{" "}
                    | {new Date(item.releaseDate).getFullYear()}
                </Text>
            </View>
        </View>
    );
};

export default function TrendingMovies({ data }: TrendingMoviesProps) {
    const { height } = useWindowDimensions();
    const isLandscape = width > height;
    const cardWidth =  isLandscape ? width * 0.9 : width * 0.45;
    const cardHeight =  isLandscape ? height * 0.7 : cardWidth * 1.4;

    const carouselWidth = isLandscape ? width * 1.8 : width * 1.18;

    return (
        <View>
            <Text style={styles.sectionTitle}>Fresh from the MMFF</Text>
            <View style={styles.carouselContainer}>
                {data.length === 0 ? (
                    <Text style={styles.emptyMessage}>Movies loading please wait.</Text>
                ) : (
                    <Carousel
                        loop
                        width={carouselWidth}
                        height={cardHeight * 1.54}
                        autoPlay={false}
                        data={data}
                        scrollAnimationDuration={800}
                        mode="parallax"
                        modeConfig={{
                            parallaxScrollingScale: isLandscape ?  0.5 : 0.9,
                            parallaxScrollingOffset: isLandscape ? cardWidth * 1.2 : cardWidth * 1.2,
                        }}
                        renderItem={({ item, index }) => (
                            <MovieCard item={item} cardWidth={cardWidth} index={index} />
                        )}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionTitle: {
        color: "#ffffff",
        fontSize: 20,
        marginTop: 16,
        marginBottom: 24,
        marginLeft: 16,
        fontWeight: "bold",
    },
    carouselContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    emptyMessage: {
        color: "#ffffff",
        marginLeft: 16,
    },
    cardWrapper: {
        justifyContent: "center",
        alignItems: "center",
    },
    imageWrapper: {
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
    },
    titleWrapper: {
        flexDirection: "row",
        zIndex: 50,
    },
    titleText: {
        color: "#ffffff",
        fontSize: 18,
        marginTop: 8,
        textAlign: "center",
    },
});
