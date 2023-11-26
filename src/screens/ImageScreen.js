import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";
import beach from "../../assets/images/beach.jpg";
import forest from "../../assets/images/forest.jpg";
import mountain from "../../assets/images/mountain.jpg";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" image={forest} score={10} />
      <ImageDetail title="Mountain" image={mountain} score={8} />
      <ImageDetail title="Beach" image={beach} score={9} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
