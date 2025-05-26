import { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    useWindowDimensions,
    StyleSheet,
} from "react-native";
import RatingsF from "@/components/RatingsF";
import YearF from "@/components/YearF";
import GenreF from "@/components/GenreF";
import { images } from "@/constansts/images";
import Awards from "@/components/Awards";
import { useRouter } from "expo-router";
import { icons } from "@/constansts/icons";
import { useAppContext } from "./../context/appContext";
import down from "@/assets/icons/Left.png";

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

const Saved = ({ item }: { item: Movie }) => {
    const [showFilters, setShowFilters] = useState(false);
    const [showFilters2, setShowFilters2] = useState(false);

    const { favortiteMovies, applyFilters, activeFilter } = useAppContext();

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
        ? applyFilters(favortiteMovies)
        : favortiteMovies;
    const router = useRouter();

    const handlePress = (item: any) => {
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
    };

    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    return (
        <View style={styles.container}>
            <Image
                source={images.upperhome}
                style={styles.backgroundImage}
                resizeMode="cover"
            />

            <View style={styles.centerAlign}>
                <Image
                    source={icons.logo2}
                    style={isLandscape ? styles.logoLandscape : styles.logoPortrait}
                />
            </View>

            <View
                style={[
                    styles.headerContainer,
                    isLandscape ? styles.headerLandscape : styles.headerPortrait,
                ]}
            >
                <Text style={styles.savedText}>Saved ({favortiteMovies.length})</Text>

                <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => setShowFilters(!showFilters)}
                >
                    <Text style={styles.filterText}>Genre/Awards</Text>
                    <Image source={icons.down} style={styles.iconStyle} resizeMode="contain" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => setShowFilters2(!showFilters2)}
                >
                    <Text style={styles.filterText}>Year/Rating</Text>
                    <Image source={icons.down} style={styles.iconStyle} resizeMode="contain" />
                </TouchableOpacity>
            </View>

            <View style={styles.filtersContainer}>{showFilters && <><GenreF /><Awards /></>}</View>
            <View style={styles.filtersContainer}>{showFilters2 && <><YearF /><RatingsF /></>}</View>

            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    minHeight: Math.max(
                        height,
                        isLandscape ? favortiteMovies.length * 135 : favortiteMovies.length * 140
                    ),
                    paddingBottom: 15,
                }}
            >
                <View style={styles.moviesContainer}>
                    {moviesToShow.length === 0 ? (
                        <Text style={styles.noMoviesText}>No saved movies yet.</Text>
                    ) : (
                        moviesToShow.map((item: any, index: any) => (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => handlePress(item)}
                            >
                                <View style={styles.movieCard}>
                                    <View style={styles.movieInnerCard}>
                                        <Image
                                            source={{ uri: item.poster }}
                                            style={styles.movieImage}
                                        />
                                        <View style={styles.movieTextContainer}>
                                            <Text style={styles.movieTitle} numberOfLines={1}>{item.title}</Text>
                                            <Text style={styles.movieDetails} numberOfLines={1}>
                                                {Array.isArray(item.genre)
                                                    ? item.genre.map((g: any) => g.trim()).join(", ")
                                                    : item.genre?.toString().trim()} • {item.releaseDate}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        ))
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#282828" },
    backgroundImage: { position: "absolute", width: "100%", zIndex: 0 },
    centerAlign: { justifyContent: "center", alignItems: "center" },
    logoLandscape: { width: 68, height: 42, marginTop: 24, alignSelf: "center" },
    logoPortrait: { width: 68, height: 42, marginTop: 64, marginBottom: 20, alignSelf: "center" },
    headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    headerLandscape: { paddingHorizontal: 144, marginTop: 8 },
    headerPortrait: { paddingHorizontal: 20, marginTop: 20 },
    savedText: { color: "#FFFFFF", fontWeight: "600", marginLeft: 28, marginBottom: 16 },
    filterButton: {
        backgroundColor: "#D9D9D9",
        borderRadius: 20,
        width: 100,
        height: 37,
        marginBottom: 8,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "#000000",
    },
    filterText: { fontSize: 10, color: "#000000", marginRight: 4 },
    iconStyle: { width: 20, height: 20 },
    filtersContainer: { paddingHorizontal: 20 },
    scrollView: { paddingHorizontal: 20, marginTop: 16 },
    moviesContainer: { justifyContent: "space-between", alignItems: "center" },
    noMoviesText: { color: "white", fontSize: 18, marginTop: 40 },
    movieCard: {
        backgroundColor: "#D9D9D9",
        width: 320,
        height: 109,
        borderRadius: 20,
        marginBottom: 4,
        borderWidth: 2,
        borderColor: "#000000",
    },
    movieInnerCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    movieImage: {
        width: 123,
        height: 82,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: "#000000",
    },
    movieTextContainer: { flex: 1, marginLeft: 16 },
    movieTitle: { color: "#3c3c3c", fontWeight: "bold", fontSize: 16 },
    movieDetails: { color: "#3c3c3c", fontSize: 14, marginTop: 4 },
});

export default Saved;
