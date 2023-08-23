import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnBoarding from "../Container/Onboarding";
import DashBoard from "../Container/Dashboard";
import Login from "../Container/Loging";

const Stack = createNativeStackNavigator();

const  Navigation= ()=> {
  return (
    <NavigationContainer initialRouteName="OnBoarding">
       <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="OnBoarding" component={OnBoarding}  />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="DashBoard" component={DashBoard}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;