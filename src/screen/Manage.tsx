import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Home from './Home';
import Notification from './Notification';
import Reminder from './Reminder';
import More from './More';
import HomeManage from './HomeManage';
const Tab = createBottomTabNavigator();

function Manage() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen name="Trang chủ" component={HomeManage} options={{
                    tabBarIcon: () => (
                        <Image source={require('../images/home.png')} style={{ width: 30, height: 30 }} resizeMode="stretch" />
                    ), headerShown: false
                }}
                />
                <Tab.Screen name="Nhắc nhở" component={Reminder} options={{
                    tabBarIcon: () => (
                        <Image source={require('../images/home.png')} style={{ width: 30, height: 30 }} resizeMode="stretch" />
                    ), headerShown: false
                }}
                />
                <Tab.Screen name="Thông báo" component={Notification} options={{
                    tabBarIcon: () => (
                        <Image source={require('../images/notification.png')} style={{ width: 30, height: 30 }} resizeMode="stretch" />
                    ), headerShown: false
                }}
                />
                <Tab.Screen name="Khác" component={More} options={{
                    tabBarIcon: () => (
                        <Image source={require('../images/menu-bar.png')} style={{ width: 30, height: 30 }} resizeMode="stretch" />
                    ), headerShown: false
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Manage;