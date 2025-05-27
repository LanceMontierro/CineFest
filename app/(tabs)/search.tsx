import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { images } from "@/constansts/images";
import { icons } from "@/constansts/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import { useAppContext } from "./../context/appContext";
import GenreF from "@/components/GenreF";
import Awards from "@/components/Awards";
import YearF from "@/components/YearF";
import RatingsF from "@/components/RatingsF";

const Search = () => {
  const { movies, applyFilters, activeFilter } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);

  const router = useRouter();

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredMovies(movies.slice(0, 0));
    } else {
      const filtered = movies.filter((movie: any) =>
        movie.title?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [searchQuery, movies]);

  const { addToRecentlyViewedMovies } = useAppContext();

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

  const handlePress = (movie: any) => {
    router.push({
      pathname: "/MovieDetails/[d]",
      params: {
        d: movie.title,
        title: movie.title,
        description: movie.description,
        poster: movie.poster,
        genre: movie.genre || "Unknown",
        releaseDate: movie.releaseDate || "Unknown",
        rating: movie.rating || "N/A",
        awards: movie.awards || "None",
        link: movie.link || "",
        cast: movie.cast,
      },
    });
    addToRecentlyViewedMovies(movie);
  };

  const [showFilters, setShowFilters] = useState(false);
  const [showFilters2, setShowFilters2] = useState(false);

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View style={styles.container}>
      <Image
        source={images.upperhome}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.logoContainer}>
        <Image
          source={icons.logo2}
          style={[
            styles.logo,
            isLandscape ? styles.logoLandscape : styles.logoPortrait,
          ]}
        />
      </View>

      <View
        style={
          isLandscape ? styles.searchBarLandscape : styles.searchBarPortrait
        }
      >
        <SearchBar
          placeholder="Search MMFF movies"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onFilterPress={() => setShowFilters(!showFilters)}
          onFilter2Press={() => setShowFilters2(!showFilters2)}
        />
        {(showFilters ||showFilters2 || moviesToShow !== movies) && (
          <View style={styles.filtersContainer}>
            {showFilters && (
                <>
                  <GenreF />
                  <Awards />
                </>
            )}
            {showFilters2 && (
                <>
                  <YearF />
                  <RatingsF />
                </>
            )}
          </View>
        )}
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: Math.max(
            height,
            isLandscape ? moviesToShow.length : moviesToShow.length * 155
          ),
          paddingBottom: isLandscape ? 120 : 120,
        }}
      >
        <View
          style={
            isLandscape
              ? styles.moviesContainerLandscape
              : styles.moviesContainer
          }
        >
          {isAnyFilterActive(activeFilter) ? (
            moviesToShow.length > 0 ? (
              moviesToShow.map((movie: any, index: any) => (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => handlePress(movie)}
                >
                  <View
                    style={
                      isLandscape ? styles.movieCardLandscape : styles.movieCard
                    }
                  >
                    <Image
                      source={{ uri: movie.poster || images.blank }}
                      style={{
                        width: width * 0.43,
                        height: height * 0.3,
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: "#000000",
                      }}
                    />
                    <Text style={styles.movieDetails}>
                      {movie.title && movie.title.length > 10
                        ? movie.title.slice(0, 10) + "..."
                        : movie.title || "No Title"}{" "}
                      | {new Date(movie.releaseDate).getFullYear()}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              ))
            ) : (
              <Text style={styles.noResultsText}>
                No filtered movies found.
              </Text>
            )
          ) : searchQuery.trim().length > 0 ? (
            filteredMovies.length > 0 ? (
              filteredMovies.map((movie: any, index: any) => (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => handlePress(movie)}
                >
                  <View style={styles.movieCard}>
                    <Image
                      source={{ uri: movie.poster || images.blank }}
                      style={styles.movieImage}
                    />
                    <Text style={styles.movieDetails}>
                      {movie.title && movie.title.length > 20
                        ? movie.title.slice(0, 10) + "..."
                        : movie.title || "No Title"}{" "}
                      | {new Date(movie.releaseDate).getFullYear()}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              ))
            ) : (
              <Text style={styles.noResultsText}>No movies found.</Text>
            )
          ) : (
            <Text></Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    zIndex: 0,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 68,
    height: 42,
  },

  starIcon: { width: 16, height: 16, marginLeft: 4 },
  logoLandscape: {
    marginTop: 24,
    marginHorizontal: "auto",
  },
  logoPortrait: {
    marginTop: 64,
    marginBottom: 20,
    marginHorizontal: "auto",
  },
  searchBarLandscape: {
    marginTop: 16,
  },
  searchBarPortrait: {
    marginTop: 40,
  },
  filtersContainer: {
    paddingHorizontal: 20,
    marginTop: 8,
    gap: 8,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 16,
  },
  resultText: {
    color: "#ffffff",
    fontWeight: "600",
    marginLeft: 28,
    marginBottom: 16,
  },
  noResultsText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  moviesContainerLandscape: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  movieCardLandscape: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  moviesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  movieCard: {
    width: Dimensions.get("window").width / 2 - 30,
    alignItems: "center",
    marginBottom: 16,
  },
  movieImage: {
    width: "100%",
    aspectRatio: 2 / 3,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000000",
  },
  movieTitle: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
  },
  movieDetails: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 8,
  },
});

export default Search;
