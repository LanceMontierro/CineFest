import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { images } from "@/constansts/images";
import SearchBar from "@/components/SearchBar";
import {useRouter} from "expo-router";


export default function Index() {

    const router = useRouter();

  return (
    <View className="flex-1 bg-[#282828]">

      <Image source={images.upperhome} className="absolute w-full z-0"/>

        <ScrollView
            className="flex-1 px-5"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ minHeight: "250%", paddingBottom: 10 }}
        >
            <Image className="w-12 h-10 mt-20 mb-5 mx-auto" />

            <View className="flex-1 mt-5 " >
                <SearchBar
                    onPress={() => router.push("/search")}
                    placeholder= "Search MMFF movies"
                />
            </View>

        </ScrollView>
    </View>
  );
}
