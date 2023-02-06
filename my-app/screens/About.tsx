import { View, Text, FlatList, TextInput } from "react-native";
import React from "react";

interface TodoProps {
  id: number;
  title: string;
}
const todos: TodoProps[] = [];

export default function About() {
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ marginRight: 10 }}>Todo:</Text>
        <TextInput
          placeholder="Please enter field!"
          style={{ borderWidth: 1, padding: 5, borderRadius: 5, color: "#333" }}
          onKeyPress={({ nativeEvent }) => console.log(nativeEvent)}
        />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}
