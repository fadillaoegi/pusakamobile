import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { bgApps } from "@/app/assets";

export const LoginScreen = () => {
  return (
    <ImageBackground
      source={bgApps}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}> Login Screen</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  card: {
    width: 370,
    height: 370,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    color: "#000",
  },
});
