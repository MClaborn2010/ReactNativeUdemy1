import { React, useState } from "react";
import { Button } from "react-native";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Michael";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.secondaryText}>My name is {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  secondaryText: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
