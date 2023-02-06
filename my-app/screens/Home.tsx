import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { NavOptions } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://icons-for-free.com/download-icon-uber-1324440247504689178_256.icns",
          }}
          style={{ width: 100, height: 100 }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
  },
});
