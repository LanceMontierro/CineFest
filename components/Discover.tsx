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
import GenreF from "@/components/GenreF";
import YearF from "@/components/YearF";

type Movie = {
    title: string;
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

    const {movies, applyFilters, activeFilter } = useAppContext();

    const isAnyFilterActive = (filterObj: any) => {
        return Object.entries(filterObj).some(([key, val]) => {
            if (Array.isArray(val)) {
                return val.length > 0;
            }
            if (typeof val === "string") {
                return val.trim() !== "";
            }
            if (typeof val === "number") {
                return !isNaN(val);
            }
            return false;
        });
    };

    const moviesToShow = isAnyFilterActive(activeFilter)
        ? applyFilters(movies)
        : movies;

    return (
        <View style={styles.wrapper}>
            <Text style={styles.sectionTitle}>Dive into the Years</Text>
            <YearF />
            <View style={styles.carouselWrapper}>
                {moviesToShow.length === 0 ? (
                    <Text style={styles.emptyText}>No movies found</Text>
                ) : (
                    <FlatList
                        data={moviesToShow}
                        renderItem={({ item }) => (
                            <MovieCard item={item} cardWidth={cardWidth} />
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingHorizontal: 10,
                            gap: 20,
                        }}
                        keyExtractor={(item) => item.title}
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
        marginBottom: 5,
        marginLeft: 16,
        fontWeight: "bold",
    },
    carouselWrapper: {
        marginTop: 10,
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
