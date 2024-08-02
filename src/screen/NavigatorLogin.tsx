import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from './Login';
import Manage from "./Manage";
import Home from "./Home";
import HomeManage from "./HomeManage";

const LoginStack = createStackNavigator();

function NavigatorLogin(): React.JSX.Element {
    return (
        <NavigationContainer independent={true}>
            <LoginStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <LoginStack.Screen name="Login" component={Login} />
                <LoginStack.Screen name="Manage" component={Manage} />
                <LoginStack.Screen name="Home" component={Home} />
                <LoginStack.Screen name="HomeManage" component={HomeManage} />
            </LoginStack.Navigator>
        </NavigationContainer>
    );
}

export default NavigatorLogin;
