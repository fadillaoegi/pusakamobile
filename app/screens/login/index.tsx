import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
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
          <View style={styles.subCard}>
            <Text style={styles.textTitle}> Login Screen</Text>
            <Text style={styles.textLabel}> Email atau Username</Text>
            <TextInput />
          </View>
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
    padding: 20,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
  },
  subCard: {
    alignContent: "flex-start",
  },
  textTitle: {
    fontSize: 20,
    color: "#000",
    marginBottom: 40,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  textLabel: {
    fontSize: 14,
    color: "#000",
  },
});
