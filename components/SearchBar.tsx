import { View, TextInput, Image } from "react-native";
import { icons } from "@/constansts/icons";

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, value, onChangeText, onPress }: Props) => {

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
        placeholder= {placeholder}
        onChangeText={onChangeText}
        className="flex-1 ml-2 text-[#787878]"
        placeholderTextColor="#787878"
      />
    </View>
  );
};

export default SearchBar;
