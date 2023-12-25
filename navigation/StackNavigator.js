import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../screen/LoginScreen';
import RagisterScreen from "../screen/RagisterScreen";
import HomeScreen from "../screen/HomeScreen";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    function BottomTab() {
      return (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: false,
              tabBarLabel: "Home",
              tabBarLabelStyle: {
                color: "#008E97",
                tabBarIcon: ({ focused }) => {
                  focused ? (
                    <Entypo name="home" size={24} color="#008E97" />
                  ) : (
                    <AntDesign name="home" size={24} color="black" />
                  );
                },
              },
            }}
          />

          <Tab.Screen
            name="Profile"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarLabel: "Profile",
              tabBarLabelStyle: {
                color: "#008E97",
                tabBarIcon: ({ focused }) => {
                  focused ? (
                    <Ionicons name="person" size={24} color="#008E97" />
                  ) : (
                    <Ionicons name="person-outline" size={24} color="black" />
                  );
                },
              },
            }}
          />

          <Tab.Screen
            name="Cart"
            component={HomeScreen}
            options={{
              tabBarLabel: "Cart",
              tabBarLabelStyle: {
                color: "#008E97",
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                  focused ? (
                    <Entypo name="shopping-cart" size={24} color="#008E97" />
                  ) : (
                    <AntDesign name="shoppingcart" size={24} color="black" />
                  );
                },
              },
            }}
          />
        </Tab.Navigator>
      );
    }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown : false}} />
        <Stack.Screen name="Register" component={RagisterScreen} options={{headerShown : false}} />
        <Stack.Screen name="Main" component={BottomTab} options={{headerShown : false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
