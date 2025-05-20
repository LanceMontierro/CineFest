import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
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
  const [result, setResult] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const { user, movies, handleSignOut } = useAppContext() as {
    user: any;
    movies: Movie[];
    handleSignOut: () => void;
  };

  const { createMovie } = useAppContext();

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
    <View className="flex-1 bg-[#282828]">
      <Image
        source={images.dev}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      <View className="flex-row ml-52 justify-between px-8">
        <TouchableOpacity onPress={router.back}>
          <View className="mt-5">
            <Text className="font-bold text-blue-500">Go Back</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignOut}>
          <View className="mt-5">
            <Text className="font-bold text-red-900">Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View className="mt-10 px-5">
        <SearchBar
          placeholder={""}
          searchQuery={""}
          setSearchQuery={function (text: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </View>

      <View className="flex-row justify-between items-center px-6">
        <Text className="text-lg text-[#D9D9D9] font-bold mt-5 mb-3 mr-16">
          MMFF Movies
        </Text>
        <TouchableOpacity onPress={() => setShowForm(!showForm)}>
          <View className="flex-row mt-2 w-[180] h-[48] bg-[#404040] rounded-[60]">
            <Image source={icons.Sync} className="ml-5" />
            <Text className="mt-4 ml-3 text-[#D9D9D9]">Upload Movie</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1 px-5 mt-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "195%", paddingBottom: 15 }}
      >
        <Text className="text-white font-semibold ml-7 mb-4">
          Added({result.length})
        </Text>
        <View className="flex-row flex-wrap justify-between">
          {result.map((item, index) => {
            const isSelected = selectedToDelete === index;

            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={handlePress}
                onLongPress={() => setSelectedToDelete(index)}
              >
                <View className="space-y-2 mb-4 relative">
                  <Image
                    source={images.blank}
                    style={{
                      width: width * 0.44,
                      height: height * 0.3,
                      borderRadius: 10,
                    }}
                  />
                  {isSelected && (
                    <TouchableOpacity
                      className="absolute top-2 right-2 bg-red-600 p-1.5 rounded-full z-10"
                      onPress={() => {
                        const updated = [...result];
                        updated.splice(index, 1);
                        setResult(updated);
                        setSelectedToDelete(null);
                      }}
                    >
                      <Text className="text-white text-xs font-bold">X</Text>
                    </TouchableOpacity>
                  )}
                  <Text className="text-white font-bold text-sm">
                    Movie Title
                  </Text>
                  <Text className="text-white font-bold text-sm">
                    Genre & Year
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </ScrollView>

      {showForm && (
        <View className="mt-5 p-4 px-14 bg-[#333] mb-80 rounded-lg">
          {/* 🆕 Upload Button */}
          <TouchableOpacity
            onPress={pickImage}
            className="bg-[#444] p-2 rounded mb-3 items-center"
          >
            <Text className="text-white">
              {poster ? "Change Poster" : "Upload Poster"}
            </Text>
          </TouchableOpacity>

          {/* 🆕 Image Preview */}
          {poster && (
            <Image
              source={{ uri: poster }}
              className="w-full h-60 rounded mb-4"
              resizeMode="cover"
            />
          )}

          <TextInput
            placeholder="Title"
            placeholderTextColor="#999"
            className="bg-[#444] text-white p-2 rounded mb-2"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            placeholder="Genre"
            placeholderTextColor="#999"
            className="bg-[#444] text-white p-2 rounded mb-2"
            value={genre}
            onChangeText={setGenre}
          />
          <TextInput
            placeholder="Description"
            placeholderTextColor="#999"
            multiline
            className="bg-[#444] text-white p-2 rounded mb-2 h-20"
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            placeholder="Awards"
            placeholderTextColor="#999"
            className="bg-[#444] text-white p-2 rounded mb-2"
            value={awards}
            onChangeText={setAwards}
          />
          <TextInput
            placeholder="Release Date (YYYY-MM-DD)"
            placeholderTextColor="#999"
            className="bg-[#444] text-white p-2 rounded mb-2"
            value={releaseDate}
            onChangeText={setReleaseDate}
          />
          <TextInput
            placeholder="Link"
            placeholderTextColor="#999"
            className="bg-[#444] text-white p-2 rounded mb-2"
            value={link}
            onChangeText={setLink}
          />
          <TouchableOpacity
            className="bg-[#D9D9D9] p-2 rounded mt-2"
            onPress={handleSubmit}
          >
            <Text className="text-black text-center">Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SAdmin;
