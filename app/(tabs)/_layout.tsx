import { Tabs } from "expo-router";
import {
    ImageBackground,
    Image,
    Text,
    View,
    useWindowDimensions,
    StyleSheet,
} from "react-native";
import { icons } from "@/constansts/icons";
import { BlurView } from "expo-blur";

function TabIcon({ focused, icon, title }: any) {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    if (focused) {
        return (
            <ImageBackground
                style={[
                    styles.focusedTab,
                    isLandscape ? styles.focusedLandscape : styles.focusedPortrait,
                ]}
            >
                <Image source={icon} style={styles.icon} />
                <Text style={styles.focusedText}>{title}</Text>
            </ImageBackground>
        );
    }

    return (
        <View style={styles.unfocusedTab}>
            <Image source={icon} style={styles.icon} />
        </View>
    );
}

export default function TabsLayout() {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: isLandscape ? "50%" : "100%",
                    height: isLandscape ? "80%" : "100%",
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarStyle: {
                    backgroundColor: "transparent",
                    borderRadius: 20,
                    marginHorizontal: 20,
                    bottom: isLandscape ? 25 : 10,
                    marginLeft: isLandscape ? 150 : 20,
                    marginRight: isLandscape ? 150 : 20,
                    marginBottom: isLandscape ? 10 : 60,
                    height: isLandscape ? 60 : 52,
                    position: "absolute",
                    borderWidth: 1,
                    borderColor: "#8a8a8a",
                    overflow: "hidden",
                },
                tabBarBackground: () => (
                    <BlurView intensity={850} tint="dark" style={{ flex: 1 }} />
                ),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "index",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.home} title="Home" />
                    ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.search} title="Search" />
                    ),
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: "Saved",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.save} title="Saved" />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.person} title="Profile" />
                    ),
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    focusedTab: {
        backgroundColor: "#535353",
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        overflow: "hidden",
    },
    focusedLandscape: {
        minWidth: 135,
        minHeight: 85,
        marginTop: 24,
    },
    focusedPortrait: {
        minWidth: 100,
        minHeight: 55,
        marginTop: 16,
    },
    icon: {
        width: 24,
        height: 24,
    },
    focusedText: {
        color: "#D9D9D9",
        fontSize: 12,
        fontWeight: "600",
        marginLeft: 8,
    },
    unfocusedTab: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 17,
        width: "100%",
        height: "100%",
    },
});
