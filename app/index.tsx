import React from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { bgApps } from "./assets";
import { LoginScreen } from "./screens/login";
import SplashScreen from "./screens/splash";

export default function Index() {
  return (
    <View>
      {/* <LoginScreen /> */}
      <SplashScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
