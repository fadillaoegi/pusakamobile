import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

import TestScreen from "./screens/test";
import SplashScreen from "./screens/splash";

// Fungsi Page, menggunakan export default
function MainApp() {
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.container}>
        <Text style={[styles.fonts, styles.text]}>Pusaka Mobile</Text>
      </View>
    </ImageBackground>
    // <View>
    //   {/* <TestScreen /> */}
    //   <SplashScreen />
    // </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "#D50222",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center", // Memusatkan teks secara horizontal jika diperlukan
  },
  fonts: {
    fontFamily: "nunito",
    color: "#ffffff",
    fontSize: 24, // Sesuaikan ukuran font jika diperlukan
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "flex-start",
//     justifyContent: "flex-start",
//     padding: 24,
//   },
// });

export default MainApp;
