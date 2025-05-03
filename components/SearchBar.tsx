import {View, TextInput, Image, TouchableOpacity, useWindowDimensions} from "react-native";
import { icons } from "@/constansts/icons";
import React, {useState} from 'react';
import GenreF from "@/components/GenreF";
import Awards from "@/components/Awards";
import YearF from "@/components/YearF";
import RatingsF from "@/components/RatingsF";

interface SearchBarProps {
    placeholder: string;
    searchQuery: string;
    setSearchQuery: (text: string) => void;
    onFilterPress?: () => void;
    onFilter2Press?: () => void;
}

const SearchBar = ({ placeholder, searchQuery, setSearchQuery, onFilterPress, onFilter2Press }: SearchBarProps) => {

    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    return (

        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginRight:  isLandscape ? 120 : 20,
            marginLeft:  isLandscape ? 120 : 20,
            backgroundColor: 'black',
            borderRadius: 50,
        }}>

            <Image
                source={icons.search}
                className="w-5 h-5"
                resizeMode="contain"
                tintColor="#787878"
            />

            <TextInput
                value={searchQuery}
                placeholder={placeholder}
                onChangeText={(text) => setSearchQuery(text)}
                className="flex-1 ml-2 text-[#787878]"
                placeholderTextColor="#787878"
            />

            {onFilterPress && (
                <TouchableOpacity onPress={onFilterPress}>
                    <Image
                        source={icons.Filter}
                        className="w-5 h-5 mr-2"
                        resizeMode="contain"
                        tintColor="#787878"
                    />
                </TouchableOpacity>
            )}

            {onFilter2Press && (
                <TouchableOpacity onPress={onFilter2Press}>
                    <Image
                        source={icons.Filter}
                        className="w-5 h-5 mr-2"
                        resizeMode="contain"
                        tintColor="#787878"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default SearchBar;
