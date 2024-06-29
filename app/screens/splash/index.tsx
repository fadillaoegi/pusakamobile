import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const SplashScreen = () => {
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.container}>
        <Text style={[styles.fonts, styles.text]}>Pusaka Mobile</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    backgroundColor: "#D50222",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
  fonts: {
    fontFamily: "nunito",
    color: "#ffffff",
    fontSize: 24, // Sesuaikan ukuran font jika diperlukan
  },
});

export default SplashScreen;
