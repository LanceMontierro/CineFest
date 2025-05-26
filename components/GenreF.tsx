import { Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useAppContext } from "@/app/context/appContext";
import { genre } from "@/constansts/filter";

const Filters = () => {
  const { activeFilter, setActiveFilter } = useAppContext();

  const handleCategoryPress = (category: string) => {
    setActiveFilter((prev: any) => ({
      ...prev,
      genre: prev.genre.includes(category)
        ? prev.genre.filter((c: string) => c !== category)
        : [...prev.genre, category],
    }));
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {genre.map((item, index) => {
        const isSelected = activeFilter.genre.includes(item.category);
        return (
          <TouchableOpacity
            onPress={() => handleCategoryPress(item.category)}
            key={index}
            style={[
              styles.buttonBase,
              isSelected ? styles.buttonSelected : styles.buttonUnselected,
            ]}
          >
            <Text
              style={[
                styles.textBase,
                isSelected ? styles.textSelected : styles.textUnselected,
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 12,
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  buttonBase: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 9999, // rounded-full
  },
  buttonSelected: {},
  buttonUnselected: {
    borderWidth: 1,
    borderColor: "#5c5c5c",
  },
  textBase: {
    fontSize: 14,
  },
  textSelected: {
    color: "#FFFFFF",
    fontFamily: "Rubik-Bold",
    marginTop: 2,
  },
  textUnselected: {
    color: "#787878",
    fontFamily: "Rubik-Regular",
  },
});

export default Filters;
