import { StyleSheet, Text, View } from "react-native";

// Fungsi Page, menggunakan export default
export default function Page() {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}>Hello Pusaka Mobile</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
      {/* <Testing /> */}
    </View>
  );
}

// Fungsi testing, menggunakan export named
// export function Testing() {
//   return <Text style={styles.spacing} >Testing Component</Text>;
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start", // tambahkan ini untuk sentralisasi
    padding: 24,
  },

  spacing: {
    height: 100.0,
    color: "red", backgroundColor: "#000000", marginTop: 20
  },
  
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
