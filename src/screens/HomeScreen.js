import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
