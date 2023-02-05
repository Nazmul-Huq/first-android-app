import React from "react";
import { Button, View, Text, Image } from "react-native";


export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={require('../images/logo.png')} />
        <Text>Welcome to TDC World</Text>
    </View>
  );
}