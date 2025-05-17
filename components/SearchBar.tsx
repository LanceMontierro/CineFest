import {View, TextInput, Image, TouchableOpacity, useWindowDimensions} from "react-native";
import { icons } from "@/constansts/icons";
import React, {useState} from 'react';

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
            borderWidth:1,
            borderColor:"#8a8a8a",
            borderRadius: 50,

        }}>

            <Image
                source={icons.search}
                className="w-5 h-5"
                resizeMode="contain"
            />

            <TextInput
                value={searchQuery}
                placeholder={placeholder}
                onChangeText={(text) => setSearchQuery(text)}
                className="flex-1 ml-2 text-[#D9D9D9]"
                placeholderTextColor="#D9D9D9"
            />

            {onFilterPress && (
                <TouchableOpacity onPress={onFilterPress}>
                    <Image
                        source={icons.Filter}
                        className="w-5 h-5 mr-2"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}

            {onFilter2Press && (
                <TouchableOpacity onPress={onFilter2Press}>
                    <Image
                        source={icons.Filter}
                        className="w-5 h-5 mr-2"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default SearchBar;
