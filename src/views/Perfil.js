import React from "react";
import { View, StyleSheet, Text } from "react-native";


export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Dados Corporais</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 15,
  },
  numPosts: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    marginLeft: 25,
  },
});
