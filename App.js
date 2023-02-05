import * as React from "react";
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"; //tell React that we will implement a navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //create a stack navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from "./components/Homescreen";
import AboutScreen from "./components/Aboutscreen";
import ContactScreen from "./components/ContactScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="About" component={AboutScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
