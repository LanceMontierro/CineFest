import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    useWindowDimensions, Animated, Pressable, Switch, Modal,
    StyleSheet
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { icons } from "@/constansts/icons";
import { LinearGradient } from "expo-linear-gradient";
import React, {useState, useEffect, useRef} from "react";
import { useAppContext } from "./../context/appContext";

export default function MovieDetails() {
    const { addToRecentlyViewedMovies } = useAppContext();

    const {
        title,
        poster,
        description,
        genre,
        releaseDate,
        rating,
        awards,
        link,
        cast,
    } = useLocalSearchParams();

    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    const { addToFavoriteMovies, favortiteMovies } = useAppContext();

    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const isFavorite = favortiteMovies.some(
            (movie: any) => movie.title === title
        );
        setLiked(isFavorite);
    }, [favortiteMovies, title]);

    const handleLikePress = () => {
        const movieData = {
            title,
            poster,
            description,
            genre,
            releaseDate,
            rating,
            awards,
            link,
            cast,
        };
        addToFavoriteMovies(movieData);
        setLiked((prev) => !prev);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    minHeight: isLandscape ? height + 250 : "100%",
                }}
            >
                <View>
                    <Image
                        source={{ uri: poster as string }}
                        style={{
                            width: isLandscape ? width + 50 : width,
                            height: isLandscape ? height * 0.7 : height * 0.55,
                        }}
                    />

                    <View
                        style={[styles.bookmarkContainer, isLandscape && styles.bookmarkLandscape]}
                    >
                        <TouchableOpacity
                            onPress={handleLikePress}
                            activeOpacity={0.8}
                            style={isLandscape ? styles.bookmarkButton : undefined}
                        >
                            <Image
                                source={
                                    liked
                                        ? require("@/assets/icons/Bookmark1.png")
                                        : require("@/assets/icons/Bookmark2.png")
                                }
                                style={styles.bookmarkIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <LinearGradient
                        colors={[
                            "transparent",
                            "rgba(23, 23, 23, 0.8)",
                            "rgba(40, 40, 40, 1)",
                        ]}
                        style={[styles.gradient, { width, height: height * 0.4 }]}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                    />
                </View>

                <View style={{ marginTop: -50 }}>
                    <Text style={styles.title}>{title}</Text>

                    <View style={styles.metaContainer}>
                        <Text style={styles.metaText}>{releaseDate} •</Text>

                        <View style={styles.genreWrap}>
                            {(Array.isArray(genre)
                                    ? genre
                                    : genre?.split(",").map((item) => item.trim()) || []
                            ).map((item: string, index: number) => (
                                <View key={index} style={styles.metaItem}>
                                    <Text style={styles.metaText}>{item}</Text>
                                    {index !==
                                        (Array.isArray(genre)
                                            ? genre.length - 1
                                            : genre.split(",").length - 1) && (
                                            <Text style={styles.metaText}> | </Text>
                                        )}
                                </View>
                            ))}
                        </View>

                        <Text style={styles.metaText}>• {rating}</Text>
                        <Image source={icons.star} style={styles.starIcon} tintColor="#FAFAFA" />
                    </View>

                    <Text style={styles.awardsTitle}>Awards</Text>

                    <View style={styles.awardsContainer}>
                        {(Array.isArray(awards) ? awards : awards?.split(",") || []).map(
                            (item: string, index: number) => (
                                <View key={index} style={styles.metaItem}>
                                    <Text style={styles.metaText}> {item}</Text>
                                    {index !==
                                        (Array.isArray(awards)
                                            ? awards.length - 1
                                            : awards.split(",").length - 1) && (
                                            <Text style={styles.metaText}> | </Text>
                                        )}
                                </View>
                            )
                        )}
                    </View>

                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.description}>{description}</Text>

                    <Text style={styles.castTitle}>{cast?.length > 0 ? "Cast" : "Cast: N/A"}</Text>

                    <View style={styles.castContainer}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {(Array.isArray(cast) ? cast : cast?.split(",") || []).map(
                                (item: string, index: number) => (
                                    <View key={index} style={styles.metaItem}>
                                        <View style={styles.castBadge}>
                                            <Text style={styles.castText}>{item}</Text>
                                        </View>
                                        {index !==
                                            (Array.isArray(cast)
                                                ? cast.length - 1
                                                : cast.split(",").length - 1) && (
                                                <Text style={styles.divider}>|</Text>
                                            )}
                                    </View>
                                )
                            )}
                        </ScrollView>
                    </View>

                    <View style={styles.linkContainer}>
                        <Text style={styles.linkTitle}>{link?.length > 0 ? "Watch Trailer " : "No Trailer Available"}</Text>
                        <Text selectable style={styles.link}>{link}</Text>
                    </View>

                    <TouchableOpacity
                        style={[styles.backButton, isLandscape && styles.backButtonLandscape]}
                        onPress={router.back}
                    >
                        <Image
                            source={icons.arrow}
                            style={styles.backIcon}
                            tintColor="#fff"
                        />
                        <Text style={styles.backText}>Go Back</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: "#282828", flex: 1 },
    bookmarkContainer: {
        borderWidth: 2,
        borderColor: '#000000',
        backgroundColor: '#404040',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        padding: 16,
        position: 'absolute',
        right: 20,
        zIndex: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bookmarkLandscape: { left: 20, right: 'auto', width: 64, height: 64 },
    bookmarkButton: { width: 30, height: 30 },
    bookmarkIcon: { width: 40, height: 40 },
    gradient: { position: 'absolute', bottom: 0 },
    title: { color: '#FAFAFA', textAlign: 'center', fontSize: 24, fontWeight: 'bold', paddingHorizontal: 20 },
    metaContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 4, marginTop: 8 },
    metaText: { color: '#A3A3A3', fontWeight: '600', textAlign: 'center', fontSize: 14 },
    genreWrap: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' },
    metaItem: { flexDirection: 'row', alignItems: 'center' },
    starIcon: { width: 16, height: 16, marginLeft: 4 },
    awardsTitle: { color: '#FAFAFA', fontWeight: '600', textAlign: 'center', marginTop: 12, fontSize: 16 },
    awardsContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: 16 },
    sectionTitle: { color: '#FAFAFA', fontWeight: '700', fontSize: 14, textAlign: 'center', marginVertical: 8 },
    description: { color: '#A3A3A3', textAlign: 'center', paddingHorizontal: 20 },
    castTitle: { color: '#FAFAFA', fontWeight: '600', textAlign: 'center', fontSize: 16, marginTop: 20 },
    castContainer: { paddingHorizontal: 20, paddingVertical: 12 },
    castBadge: {
        backgroundColor: '#787878',
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 999,
        paddingHorizontal: 20,
        height: 40,
        marginTop: 8,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    castText: { color: '#FAFAFA', fontWeight: '500' },
    divider: { color: '#1A1A1A', marginHorizontal: 4 },
    linkContainer: { paddingHorizontal: 20, paddingVertical: 12, alignItems: 'center' },
    linkTitle: { color: '#FAFAFA', fontWeight: '600', fontSize: 16, textAlign: 'center' },
    link: { color: '#A3A3A3', fontWeight: '700', marginTop: 4 },
    backButton: {
        backgroundColor: "#404040",
        borderWidth: 2,
        borderColor: '#000000',
        paddingHorizontal: 20,
        paddingVertical: 14,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 30,
        justifyContent: "center",
        borderRadius: 17,
        marginBottom: 60,
        marginTop: 34,
    },
    backButtonLandscape: {
        marginHorizontal: 150,
        marginBottom: 20,
    },
    backIcon: { width: 20, height: 20, marginRight: 8, transform: [{ rotate: "180deg" }] },
    backText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
