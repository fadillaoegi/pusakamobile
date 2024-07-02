import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { bgApps } from "@/app/assets";

const SplashScreen = () => {
  return (
    <ImageBackground source={bgApps} style={styles.background}>
      <View style={styles.container}>
      {/* <Image source /> */}
    </View>
    </ImageBackground>
  );
};

export default SplashScreen;

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
});
