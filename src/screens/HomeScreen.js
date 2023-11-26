import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = ({ navigation }) => {
  const handleNav = (location) => {
    navigation.navigate(location);
  };
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Components Page"
        onPress={() => {
          handleNav("Components");
        }}
      />
      <Button
        title="Go to list demo"
        onPress={() => {
          handleNav("List");
        }}
      />
      <Button
        title="Go to counter demo"
        onPress={() => {
          handleNav("CounterScreen");
        }}
      />
      <Button
        title="Go to color demo"
        onPress={() => {
          handleNav("ColorScreen");
        }}
      />
      <Button
        title="Go to Square demo"
        onPress={() => {
          handleNav("SquareScreen");
        }}
      />
      <Button
        title="Go to Text demo"
        onPress={() => {
          handleNav("TextScreen");
        }}
      />
      <Button
        title="Go to Box demo"
        onPress={() => {
          handleNav("BoxScreen");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          handleNav("ImageScreen");
        }}
      >
        <Text>Go to Image Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
