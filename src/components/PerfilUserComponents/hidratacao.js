import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function Hidratacao() {
  const [fontsLoaded] = useFonts({
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.labelText}>Hidratação Diária</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.ml}>800ml</Text>
          <Text style={styles.horaRestante}>Restam 27 min</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  card: {
    width: "100%",
    height: 150,
    backgroundColor: "#07C2FF",
    borderRadius: 20,
    padding: 20,
    elevation: 1,
    marginBottom: 10,
  },
  header: {
    borderBottomWidth: 1.5,
    borderBottomColor: "white",
    paddingBottom: 10,
    marginBottom: 10,
  },
  labelText: {
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    color: 'white',
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  ml: {
    fontSize: 40,
    color: 'white',
  },
  horaRestante: {
    fontSize: 18,
    marginBottom: 5,  
    marginRight: 10,
    color: 'white',
  },
});
