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
import MaskedView from "@react-native-masked-view/masked-view";
import { images } from "@/constansts/images";

type Movie = {
    title: string;
    description: string;
    poster: string;
    cast: string;
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
            <View style={[styles.cardWrapper, { marginTop: -90, marginBottom: -90 }]}>
                <View style={styles.cardRow}>
                    <View style={{ marginRight: -90, justifyContent: 'center', alignItems: 'center' }}>
                        <MaskedView
                            maskElement={
                                <Text style={styles.maskText}>{index + 1}</Text>
                            }
                        >
                            <Image
                                source={images.rankingGradient}
                                resizeMode="cover"
                                style={{ height: cardWidth * 2.7 }}
                            />
                        </MaskedView>
                    </View>
                    <View>
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
                        <Text style={styles.movieRating}>⭐ {item.rating}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default function TrendingMovies({ data }: TrendingMoviesProps) {
    const cardWidth = width * 0.45;
    const { height } = useWindowDimensions();
    const isLandscape = width > height;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Best of the Best</Text>
            <View style={styles.carouselContainer}>
                {data.length === 0 ? (
                    <Text style={styles.emptyText}>Movies loading please wait.</Text>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => (
                            <MovieCard item={item} cardWidth={cardWidth} index={index} />
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
    container: {
        marginTop: 20,
    },
    title: {
        color: '#ffffff',
        fontSize: 20,
        marginTop: 16,
        marginBottom: 24,
        marginLeft: 16,
        fontWeight: 'bold',
    },
    carouselContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        color: '#ffffff',
        marginLeft: 16,
    },
    cardWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    maskText: {
        fontWeight: '900',
        fontSize: 310,
    },
    movieTitle: {
        color: '#ffffff',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 4,
    },
    movieRating: {
        color: '#ffffff',
        fontSize: 10,
        textAlign: 'center',
    },
});
