import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

// Import các màn hình của bạn ở đây
import HomeScreen from './Home';
import ReminderScreen from './Reminder';
import NotificationScreen from './Notification';
import MoreScreen from './More';
import ReportDetailsScreen from './ReportDetails';
import Report from './Report';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Trang chủ" component={HomeScreen} />
        <Tab.Screen name="Nhắc nhở" component={ReminderScreen} />
        <Tab.Screen name="Thông báo" component={NotificationScreen} />
        <Tab.Screen name="Thêm" component={MoreScreen} />
    </Tab.Navigator>
);

const ReceptionReport = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Report" component={Report} options={{ title: 'Báo cáo', headerRight: () => (
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>⋮</Text>
                    </TouchableOpacity>
                )}} />
                <Stack.Screen name="ReportDetails" component={ReportDetailsScreen} options={{ title: 'Báo cáo chi tiết', headerRight: () => (
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>⋮</Text>
                    </TouchableOpacity>
                )}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default ReceptionReport;
