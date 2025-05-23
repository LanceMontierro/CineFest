import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { Stack, useRouter } from 'expo-router';

export default function Animation() {
    const animationRef = useRef<LottieView>(null);
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const router = useRouter();

    useEffect(() => {
        animationRef.current?.play(0, 900);
    }, []);

    const handleAnimationFinish = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 800,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start(() => {
            router.replace('/(intro)/introstyle');
        });
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <Animated.View style={{ opacity: fadeAnim }}>
                <LottieView
                    ref={animationRef}
                    loop={false}
                    style={{ width: 200, height: 200 }}
                    source={require('@/assets/ani/animation2.json')}
                    onAnimationFinish={handleAnimationFinish}
                />
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
});
