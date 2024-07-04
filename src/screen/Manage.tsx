import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

function Manage() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen name="Trang chủ" component={''} options={{
                    tabBarIcon: () => (
                        <Image source={require('../images/home.png')} style={{ width: 30, height: 30 }} resizeMode="stretch" />
                    ), headerShown: false
                }}
                />
                <Tab.Screen name="Nhắc nhở" component={''} options={{
                    tabBarIcon: () => (
                        <Image source={require('../images/shopping-cart.png')} style={{ width: 30, height: 30 }} resizeMode="stretch" />
                    ), headerShown: false
                }}
                />
                <Tab.Screen name="Thông báo" component={''} options={{
                    tabBarIcon: () => (
                        <Image source={require('../images/location.png')} style={{ width: 30, height: 30 }} resizeMode="stretch" />
                    ), headerShown: false
                }}
                />
                <Tab.Screen name="Khác" component={''} options={{
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