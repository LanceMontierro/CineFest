import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { images } from "@/constansts/images";
import { icons } from "@/constansts/icons";
import { useAppContext } from "@/app/context/appContext";
import { useRouter } from "expo-router";
import SearchBar from "@/components/SearchBar";

const SAdmin = () => {
  const [showForm, setShowForm] = useState(false);
  const [poster, setPoster] = useState<string | null>(null);

  const { user, movies, handleSignOut } = useAppContext() as {
    user: any;
    movies: Movie[];
    handleSignOut: () => void;
  };

  const { createMovie, deleteMovie, latestMovies } = useAppContext();

  type Movie = {
    _id: string;
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

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [awards, setAwards] = useState("");
  const [link, setLink] = useState("");
  const [cast, setCast] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async () => {
    await createMovie({
      title,
      description,
      poster: poster || "",
      genre,
      releaseDate,
      rating,
      awards,
      link,
      cast,
    });
    setTitle("");
    setGenre("");
    setDescription("");
    setAwards("");
    setLink("");
    setCast("");
    setReleaseDate("");
    setRating("");
    setPoster(null);
    setShowForm(false);
  };

  const [selectedToDelete, setSelectedToDelete] = useState<number | null>(null);
  const router = useRouter();
  const { width, height } = Dimensions.get("window");

  const handlePress = () => {
    router.push("/MovieDetails/[d]");
  };

  const pickImage = async () => {
    const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setPoster(result.assets[0].uri);
    }
  };

  return (
      <View style={styles.container}>
        <Image
            source={images.dev}
            style={styles.backgroundImage}
            resizeMode="cover"
        />

        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={handleSignOut}>
            <View style={styles.logoutTextContainer}>
              <Text style={styles.logoutText}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.searchBarContainer}>
          <SearchBar
              placeholder={""}
              searchQuery={""}
              setSearchQuery={function (text: string): void {
                throw new Error("Function not implemented.");
              }}
          />
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>MMFF Movies</Text>
          <TouchableOpacity onPress={() => setShowForm(!showForm)}>
            <View style={styles.uploadButton}>
              <Image source={icons.Sync} style={styles.uploadIcon} />
              <Text style={styles.uploadText}>Upload Movie</Text>
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView
            style={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ minHeight: height * 1.95, paddingBottom: 15 }}
        >
          <Text style={styles.addedText}>Added({latestMovies.length})</Text>
          <View style={styles.moviesContainer}>
            {latestMovies.map((item: Movie, index: number) => {
              const isSelected = selectedToDelete === index;

              return (
                  <TouchableWithoutFeedback
                      key={item._id}
                      onPress={handlePress}
                      onLongPress={() => setSelectedToDelete(index)}
                  >
                    <View style={styles.movieItem}>
                      <Image
                          source={item.poster ? { uri: item.poster } : images.blank}
                          style={{
                            width: width * 0.44,
                            height: height * 0.3,
                            borderRadius: 10,
                          }}
                      />
                      {isSelected && (
                          <TouchableOpacity
                              style={styles.deleteButton}
                              onPress={() => {
                                deleteMovie(item._id);
                                setSelectedToDelete(null);
                              }}
                          >
                            <Text style={styles.deleteButtonText}>X</Text>
                          </TouchableOpacity>
                      )}
                      <Text style={styles.movieTitle}>{item.title.length > 20 ? item.title.slice(0, 17) + "..." : item.title}</Text>
                      <Text style={styles.movieGenre}>
                        {Array.isArray(item.genre)
                            ? item.genre.join(", ")
                            : item.genre}{" "}
                        &nbsp;
                        {item.releaseDate?.slice(0, 4)}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>

        {showForm && (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ minHeight: "100%", paddingBottom: 15 }}
            >
              <View style={styles.formContainer}>
                <TouchableOpacity onPress={pickImage} style={styles.pickButton}>
                  <Text style={styles.pickButtonText}>
                    {poster ? "Change Poster" : "Upload Poster"}
                  </Text>
                </TouchableOpacity>

                {poster && (
                    <Image
                        source={{ uri: poster }}
                        style={styles.posterImage}
                        resizeMode="cover"
                    />
                )}

                <TextInput
                    placeholder="Title"
                    placeholderTextColor="#999"
                    style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    placeholder="Genre"
                    placeholderTextColor="#999"
                    style={styles.input}
                    value={genre}
                    onChangeText={setGenre}
                />
                <TextInput
                    placeholder="Description"
                    placeholderTextColor="#999"
                    multiline
                    style={styles.textarea}
                    value={description}
                    onChangeText={setDescription}
                />
                <TextInput
                    placeholder="Awards"
                    placeholderTextColor="#999"
                    style={styles.input}
                    value={awards}
                    onChangeText={setAwards}
                />
                <TextInput
                    placeholder="Release Date (YYYY-MM-DD)"
                    placeholderTextColor="#999"
                    style={styles.input}
                    value={releaseDate}
                    onChangeText={setReleaseDate}
                />
                <TextInput
                    placeholder="Link"
                    placeholderTextColor="#999"
                    style={styles.input}
                    value={link}
                    onChangeText={setLink}
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#282828' },
  backgroundImage: { position: 'absolute', width: '100%', zIndex: 0 },
  logoutContainer: { flexDirection: 'row', marginLeft: 52, justifyContent: 'space-between', paddingHorizontal: 8 },
  logoutTextContainer: { marginTop: 5 },
  logoutText: { fontWeight: 'bold', color: '#7f1d1d' },
  searchBarContainer: { marginTop: 10, paddingHorizontal: 5 },
  headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 6 },
  headerText: { fontSize: 18, color: '#D9D9D9', fontWeight: 'bold', marginTop: 5, marginBottom: 3, marginRight: 16 },
  uploadButton: { flexDirection: 'row', marginTop: 2, width: 180, height: 48, backgroundColor: '#404040', borderRadius: 60 },
  uploadIcon: { marginLeft: 5 },
  uploadText: { marginTop: 16, marginLeft: 3, color: '#D9D9D9' },
  scrollContainer: { flex: 1, paddingHorizontal: 5, marginTop: 4 },
  addedText: { color: 'white', fontWeight: '600', marginLeft: 7, marginBottom: 4 },
  moviesContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingRight:5, paddingLeft:5, paddingBottom: 50 },
  movieItem: { marginBottom: 4, position: 'relative' },
  deleteButton: { position: 'absolute', top: 2, right: 2, backgroundColor: '#dc2626', padding: 6, borderRadius: 9999, zIndex: 10 },
  deleteButtonText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  movieTitle: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  movieGenre: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  formContainer: { marginTop: 5, padding: 16, paddingHorizontal: 56, backgroundColor: '#333', marginBottom: 80, borderRadius: 8 },
  pickButton: { backgroundColor: '#444', padding: 8, borderRadius: 4, marginBottom: 12, alignItems: 'center' },
  pickButtonText: { color: 'white' },
  posterImage: { width: '100%', height: 240, borderRadius: 8, marginBottom: 16 },
  input: { backgroundColor: '#444', color: 'white', padding: 8, borderRadius: 4, marginBottom: 8 },
  textarea: { backgroundColor: '#444', color: 'white', padding: 8, borderRadius: 4, marginBottom: 8, height: 80 },
  submitButton: { backgroundColor: '#D9D9D9', padding: 8, borderRadius: 4, marginTop: 8 },
  submitButtonText: { color: 'black', textAlign: 'center' },
});

export default SAdmin;
