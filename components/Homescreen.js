import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";


export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image 
          //style={styles.image}
          source={require('../images/logo.png')} 
        />
        <Text>Welcome to TDC World</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   image: {
//     width: 300,
//     height: 250,
//   },
// });