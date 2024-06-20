import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TestScreen from "./screens/test";

// Fungsi Page, menggunakan export default
function MainApp() {
  return (
    <View style={styles.container}>
      <TestScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start", // tambahkan ini untuk sentralisasi
    padding: 24,
  },
});

export default MainApp;
