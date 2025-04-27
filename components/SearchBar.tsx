import { View, TextInput, Image, TouchableOpacity } from "react-native";
import { icons } from "@/constansts/icons";
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import GenreF from "@/components/GenreF";
import YearF from "@/components/YearF";
import RatingsF from "@/components/RatingsF";
import Awards from "@/components/Awards";

interface Props {
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
    onPress?: () => void;
    onFilterPress?: () => void;
    onFilter2Press?: () => void;
}

const DevCommandInput = () => {
    const [input, setInput] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [showFilters2, setShowFilters2] = useState(false);
    const navigation = useNavigation<any>();

    const handleCommand = (text: string) => {
        setInput(text);

        if (text === '/devmode') {
            navigation.navigate('SAdmin');
        }
    };

    return (
        <View>
            <SearchBar
                placeholder="Search MMFF movies"
                value={input}
                onChangeText={handleCommand}
                onFilterPress={() => setShowFilters((prev) => !prev)}
                onFilter2Press={() => setShowFilters2((prev) => !prev)}
            />

            {(showFilters || showFilters2) && (
                <View className="px-5 mt-2 space-y-2">
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
    );
};

const SearchBar = ({ placeholder, value, onChangeText, onPress,  onFilterPress, onFilter2Press}: Props) => {
    return (
        <View className="flex-row items-center px-5 py-4 bg-black rounded-full">
            <Image
                source={icons.search}
                className="w-5 h-5"
                resizeMode="contain"
                tintColor="#787878"
            />

            <TextInput
                onPress={onPress}
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                className="flex-1 ml-2 text-[#787878]"
                placeholderTextColor="#787878"
            />

            <TouchableOpacity onPress={onFilterPress}>
                <Image
                    source={icons.Filter}
                    className="w-5 h-5 mr-2"
                    resizeMode="contain"
                    tintColor="#787878"
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={onFilter2Press}>
                <Image
                    source={icons.Filter}
                    className="w-5 h-5 mr-2"
                    resizeMode="contain"
                    tintColor="#787878"
                />
            </TouchableOpacity>
        </View>
    );
};

export default DevCommandInput;
