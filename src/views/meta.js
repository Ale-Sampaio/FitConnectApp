import React, { useState } from "react";
import { useFonts } from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { cinzaLow, rosaTurquesa } from "../assets/colors"; 

export default function MetaScreen() {
  const navigation = useNavigation();

  const handleNavigateToBack = () => {
    navigation.navigate("ConfigPerfil");
  };

  const [fontsLoaded] = useFonts({
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "PoppinsLight": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  const [selectedGoal, setSelectedGoal] = useState("");

  const goals = ["Ganhar Massa", "Manter Peso", "Perder Peso"];

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleNavigateToBack}
          style={styles.arrowContainer}
        >
          <FontAwesome name="angle-left" size={28} color={rosaTurquesa} />
        </TouchableOpacity>
        <Text style={styles.titleText}>
          Vamos Definir um{"\n"}
          <Text style={styles.titleTextBold}>Objetivo</Text> para você 
        </Text>
      </View>

      <View style={styles.goalButtonsContainer}>
        {goals.map((goal) => (
          <TouchableOpacity
            key={goal}
            style={[
              styles.goalButton,
              selectedGoal === goal && styles.selectedGoalButton,
            ]}
            onPress={() => setSelectedGoal(goal)}
          >
            <Text style={[styles.goalButtonText, selectedGoal === goal && { color: "white" }]}>
              {goal}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Treino");
        }}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 70,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 50,
    paddingTop: 30,
  },
  titleText: {
    fontSize: 32,
    fontFamily: "Poppins-Medium",
  },
  titleTextBold: {
    fontSize: 32,
    fontFamily: "Poppins-Medium",
    color: rosaTurquesa,
  },
  arrowContainer: {
    position: "absolute",
    left: 20,
  },
  goalButtonsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 30,
  },
  goalButton: {
    borderWidth: 1,
    borderColor: cinzaLow,
    height: 70,
    width: 330,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedGoalButton: {
    backgroundColor: rosaTurquesa,
    borderColor: rosaTurquesa,
  },
  goalButtonText: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
  button: {
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 50,
    width: 350,
    height: 50,
    marginTop: 70,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Poppins-Medium",
  },
});
