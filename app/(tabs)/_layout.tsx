import { Tabs } from "expo-router";
import {
    ImageBackground,
    Image,
    Text,
    View,
    useWindowDimensions,
    StyleSheet,
    Platform,
} from "react-native";
import { icons } from "@/constansts/icons";
import { BlurView } from "expo-blur";

function TabIcon({ focused, icon, title }: any) {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    return focused ? (
        <ImageBackground
            style={[
                styles.focusedTab,
                isLandscape ? styles.focusedLandscape : styles.focusedPortrait,
            ]}
        >
            <Image source={icon} style={styles.icon} />
            <Text style={styles.focusedText}>{title}</Text>
        </ImageBackground>
    ) : (
        <View style={ isLandscape? styles.unfocusedTabLandscape :styles.unfocusedTab}>
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
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: isLandscape ? 10 : 0,
                },
                tabBarStyle: {
                    position: "absolute",
                    backgroundColor: "transparent",
                    borderRadius: 20,
                    marginHorizontal: isLandscape ? width * 0.15 : 20,
                    marginBottom: isLandscape ? 30 : 60,
                    height: isLandscape ? 60 : 52,
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
                    title: "Home",
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
        borderRadius: 15,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop:16,
        width: 20,
        height: 40,
    },

    unfocusedTabLandscape: {
        marginTop: 4,
    },

    focusedLandscape: {
        minWidth: 120,
        marginTop: 7,
    },
    focusedPortrait: {
        minWidth: 67,
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
    focusedText: {
        color: "#D9D9D9",
        fontSize: 12,
        fontWeight: "600",
        marginLeft: 3,
    },
    unfocusedTab: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        width: "100%",
        height: "100%",
    },
});
