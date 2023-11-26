import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

const TextScreen = (props) => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password: </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Search..."
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(e) => setPassword(e)}
        value={password}
      />
      {password.length < 6 && password.length > 0 ? (
        <Text>Your password must be longer than 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    width: "50%",
    margin: 15,
    padding: 4,
  },
});

export default TextScreen;
