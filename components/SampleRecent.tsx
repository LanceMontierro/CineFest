import React from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    useWindowDimensions,
    FlatList,
    StyleSheet,
} from 'react-native';
import { useRouter } from "expo-router";
import { useAppContext } from "@/app/context/appContext";

type Movie = {
    title: string;
    cast: string;
    description: string;
    poster: string;
    genre: string;
    releaseDate: string;
    rating: string;
    awards: string;
    link: string;
};

interface TrendingMoviesProps {
    data: Movie[];
}

const { width } = Dimensions.get('window');

const MovieCard = ({ item, cardWidth }: { item: Movie; cardWidth: number }) => {
    const router = useRouter();
    const { addToRecentlyViewedMovies } = useAppContext();

    const handlePress = () => {
        router.push({
            pathname: "/MovieDetails/[d]",
            params: {
                d: item.title,
                title: item.title,
                cast: item.cast,
                description: item.description,
                poster: item.poster,
                genre: item.genre,
                releaseDate: item.releaseDate,
                rating: item.rating,
                awards: item.awards,
                link: item.link,
            },
        });
        addToRecentlyViewedMovies(item);
    };

    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
            <View style={styles.cardContainer}>
                <Image
                    source={{ uri: item.poster }}
                    style={{
                        width: isLandscape ? cardWidth * 1.1 : cardWidth,
                        height: cardWidth * 1.4,
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: '#000000',
                    }}
                    resizeMode="cover"
                />
                <Text style={styles.movieTitle}>
                    {item.title && item.title.length > 30
                        ? item.title.slice(0, 20) + "..."
                        : item.title || "No Title"}
                </Text>
                <Text style={styles.rating}>⭐ {item.rating}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default function TrendingMovies({ data }: TrendingMoviesProps) {
    const cardWidth = width * 0.45;
    const { height } = useWindowDimensions();
    const isLandscape = width > height;

    return (
        <View style={styles.wrapper}>
            <Text style={styles.sectionTitle}>Recently Viewed</Text>
            <View style={styles.carouselWrapper}>
                {data.length === 0 ? (
                    <Text style={styles.emptyText}>No recently viewed</Text>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <MovieCard item={item} cardWidth={cardWidth} />
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingHorizontal: 10,
                            gap: 20,
                        }}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
    },
    sectionTitle: {
        color: "#ffffff",
        fontSize: 20,
        marginTop: 16,
        marginBottom: 24,
        marginLeft: 16,
        fontWeight: "bold",
    },
    carouselWrapper: {
        justifyContent: "center",
        alignItems: "center",
    },
    emptyText: {
        color: "#ffffff",
        marginLeft: 16,
    },
    cardContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    movieTitle: {
        color: "#ffffff",
        fontSize: 14,
        marginTop: 8,
        textAlign: "center",
    },
    rating: {
        color: "#ffffff",
        fontSize: 12,
    },
});
