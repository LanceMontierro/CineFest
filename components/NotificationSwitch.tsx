import React, { useState, useEffect } from 'react';
import { View, Text, Switch, Alert, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { useAppContext } from '@/app/context/appContext';

const NotificationSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const { setExpoPushToken } = useAppContext();

    useEffect(() => {
        checkNotificationStatus();
    }, []);

    const checkNotificationStatus = async () => {
        const { status } = await Notifications.getPermissionsAsync();
        if (status === 'granted') {
            setIsEnabled(true);
        }
    };

    const requestPermissionAndRegister = async () => {
        if (!Device.isDevice) {
            Alert.alert('Notifications', 'Push notifications only work on physical devices.');
            return;
        }

        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }

        if (finalStatus !== 'granted') {
            Alert.alert('Permission Denied', 'You must enable notifications in settings to receive them.');
            setIsEnabled(false);
            return;
        }

        try {
            const tokenData = await Notifications.getExpoPushTokenAsync();
            const token = tokenData.data;
            setExpoPushToken(token);
            console.log('Expo Push Token:', token);
            setIsEnabled(true);
        } catch (error) {
            console.error('Failed to get push token:', error);
            Alert.alert('Error', 'Something went wrong while getting push token.');
        }

        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }
    };

    const handleToggle = async () => {
        if (!isEnabled) {
            await requestPermissionAndRegister();
        } else {
            setIsEnabled(false);
        }
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
            <Text style={{ fontSize: 16, marginRight: 10 }}></Text>
            <Switch
                value={isEnabled}
                onValueChange={handleToggle}
                thumbColor={isEnabled ? '#787878' : '#f4f3f4'}
                trackColor={{ false: '#767577', true: '#2e2e2e' }}
            />
        </View>
    );
};

export default NotificationSwitch;
