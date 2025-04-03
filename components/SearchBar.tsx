import { View, TextInput, Image } from "react-native";
import { icons } from "@/constansts/icons";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className="flex-row items-center px-5 py-4 bg-black rounded-full">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#787878"
      />
      <TextInput
        onPress={onPress}
        placeholder= {placeholder}
        className="flex-1 ml-2 text-[#787878]"
        placeholderTextColor="#787878"
      />
    </View>
  );
};

export default SearchBar;
