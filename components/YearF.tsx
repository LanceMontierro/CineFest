import { useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { useAppContext } from "@/app/context/appContext";
import { awards, year } from "@/constansts/filter";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const initialFilter = params.filter || "";
  const [selectedCategories, setSelectedCategories] =
    useState<string>(initialFilter);
  const { activeFilter, setActiveFilter, toggleAwards } = useAppContext();

  useEffect(() => {
    router.setParams({
      filter: selectedCategories,
    });

    setActiveFilter((prev: any) => ({
      ...prev,
      year: selectedCategories,
    }));
  }, [selectedCategories]);

  const handleCategoryPress = (category: string) => {
    setSelectedCategories((prev) => (prev === category ? "" : category));
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {year.map((item, index) => {
        const isSelected = selectedCategories === item.category;
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
