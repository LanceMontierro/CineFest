import {
    View,
    TextInput,
    Image,
    TouchableOpacity,
    useWindowDimensions,
    StyleSheet,
} from "react-native";
import { icons } from "@/constansts/icons";
import React from "react";

interface SearchBarProps {
    placeholder: string;
    searchQuery: string;
    setSearchQuery: (text: string) => void;
    onFilterPress?: () => void;
    onFilter2Press?: () => void;
}

const SearchBar = ({
                       placeholder,
                       searchQuery,
                       setSearchQuery,
                       onFilterPress,
                       onFilter2Press,
                   }: SearchBarProps) => {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    return (
        <View
            style={[
                styles.container,
                {
                    marginRight: isLandscape ? 120 : 20,
                    marginLeft: isLandscape ? 120 : 20,
                },
            ]}
        >
            <Image source={icons.search} style={styles.icon} resizeMode="contain" />

            <TextInput
                value={searchQuery}
                placeholder={placeholder}
                onChangeText={setSearchQuery}
                style={styles.textInput}
                placeholderTextColor="#D9D9D9"
            />

            {onFilterPress && (
                <TouchableOpacity onPress={onFilterPress}>
                    <Image
                        source={icons.Filter}
                        style={styles.filterIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}

            {onFilter2Press && (
                <TouchableOpacity onPress={onFilter2Press}>
                    <Image
                        source={icons.Filter}
                        style={styles.filterIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "#8a8a8a",
        borderRadius: 50,
    },
    icon: {
        width: 20,
        height: 20,
    },
    filterIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    textInput: {
        flex: 1,
        marginLeft: 8,
        color: "#D9D9D9",
    },
});

export default SearchBar;
