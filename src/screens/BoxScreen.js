import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxScreen = (props) => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.boxContainer}>
        <View style={styles.box} />
        <View style={styles.boxTwo} />
      </View>
      <View style={styles.boxThree} />
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    height: "50%",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  box: {
    borderWidth: 3,
    borderColor: "red",
    backgroundColor: "red",
    height: 100,
    width: 100,
  },
  boxTwo: {
    borderWidth: 3,
    borderColor: "purple",
    backgroundColor: "purple",
    height: 100,
    width: 100,
  },
  boxThree: {
    borderWidth: 3,
    borderColor: "green",
    backgroundColor: "green",
    height: 100,
    width: 100,
  },
});
