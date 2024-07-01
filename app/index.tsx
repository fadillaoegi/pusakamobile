import React from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { bgApps } from "./assets";
import { LoginScreen } from "./screens/login";

export default function Index() {
  return (
    <View>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
