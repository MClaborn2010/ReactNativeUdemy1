import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Alice", age: "30" },
    { name: "Bob", age: "31" },
    { name: "Charlie", age: "32" },
    { name: "David", age: "33" },
    { name: "Emily", age: "34" },
    { name: "Frank", age: "35" },
    { name: "Grace", age: "36" },
    { name: "Henry", age: "37" },
    { name: "Ivy", age: "38" },
    { name: "Jack", age: "39" },
  ];

  return (
    <View>
      <FlatList
        style={styles.listStyle}
        showsVerticalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age: {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 20,
  },
  listStyle: {
    backgroundColor: "#BFBFBF",
    width: "50%",
  },
});

export default ListScreen;
