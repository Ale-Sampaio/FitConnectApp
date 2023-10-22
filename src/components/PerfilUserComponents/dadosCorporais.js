import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { rosaTurquesa } from '../../assets/colors/index';

const InfoCard = ({ label, value }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default function DadosCorporaisScreen() {
  const [fontsLoaded] = useFonts({
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <InfoCard label="Peso" value="65 kg" />
        <InfoCard label="Altura" value="170 cm" />
        <InfoCard label="IMC" value="22.5" />
        <InfoCard label="Objetivo" value="Perder peso" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    
    
  },
  row: {
    flexDirection: "row",
  },
  card: {
    justifyContent:"center",
    alignItems:"center",
    width: 90,
    height: 90,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 5,
  },
  label: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    marginBottom: 7,
    color: rosaTurquesa
  },
  value: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#333",
  },
});
