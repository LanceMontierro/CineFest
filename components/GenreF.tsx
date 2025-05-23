import { useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useAppContext } from "@/app/context/appContext";
import { genre } from "@/constansts/filter";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const initialFilters = params.filter ? params.filter.split(",") : [];
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialFilters);
  const { activeFilter, setActiveFilter, toggleGenre } = useAppContext();

  useEffect(() => {
    router.setParams({
      filter: selectedCategories.join(","),
    });

    setActiveFilter((prev: any) => ({
      ...prev,
      genre: selectedCategories,
    }));
  }, [selectedCategories]);

  const handleCategoryPress = (category: string) => {
    toggleGenre(category);
    setSelectedCategories((prev) =>
        prev.includes(category)
            ? prev.filter((c) => c !== category)
            : [...prev, category]
    );
  };

  return (
      <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
      >
        {genre.map((item, index) => {
          const isSelected = selectedCategories.includes(item.category);
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
  buttonSelected: {

  },
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
