import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const handleNav = (location) => {
    navigation.navigate(location);
  };
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignContent: "flex-start",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
