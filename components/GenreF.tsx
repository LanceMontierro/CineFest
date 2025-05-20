import { useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Text, ScrollView, TouchableOpacity } from "react-native";
import { useAppContext } from "@/app/context/appContext";
import { genre } from "@/constansts/filter";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const initialFilters = params.filter ? params.filter.split(",") : [];
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(initialFilters);
  const { activeFilter, setActiveFilter } = useAppContext();

  useEffect(() => {
    router.setParams({
      filter: selectedCategories.join(","),
    });
  }, [selectedCategories]);

  const handleCategoryPress = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prev) => prev.filter((c) => c !== category));
    } else {
      setSelectedCategories((prev) => [...prev, category]);
    }

    setActiveFilter((prev: any) => ({
      ...prev,
      genre: prev.genre === category ? null : category,
    }));
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
    >
      {genre.map((item, index) => {
        const isSelected = selectedCategories.includes(item.category);
        return (
          <TouchableOpacity
            onPress={() => handleCategoryPress(item.category)}
            key={index}
            className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${
              isSelected
                ? "bg-primary-300"
                : "bg-primary-100 border border-[#787878]"
            }`}
          >
            <Text
              className={`text-sm ${
                isSelected
                  ? "text-white font-rubik-bold mt-0.5"
                  : "text-[#787878] font-rubik"
              }`}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Filters;
