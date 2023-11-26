import { React, useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ComponentsScreen = (props) => {
  const name = "Michael";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.secondaryText}>My name is {name}!</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
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
