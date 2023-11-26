import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.image} width={10} height={10} />
      <Text>{props.title}</Text>
      <Text>{props.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
