// ButtonGroup.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { rosaTurquesa, cinza } from "../../assets/colors";

const ButtonGroup = ({ onFilterPress }) => {
  const [fontsLoaded] = useFonts({
    PoppinsLight: require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  const [selectedFilter, setSelectedFilter] = useState("Todos");

  if (!fontsLoaded) {
    return null;
  }

  const handleFilterPress = (filter) => {
    console.log(`Botão ${filter} selecionado`);
    setSelectedFilter(filter);
    onFilterPress(filter);
  };

  return (
    <View style={styles.container}>
      {tiposTreino.map((filter, index) => (
        <TouchableOpacity
          key={filter}
          style={[
            styles.filterButton,
            selectedFilter === filter && styles.selectedFilterButton,
            index > 0 && { marginLeft: 10 },
          ]}
          onPress={() => handleFilterPress(filter)}
        >
          <Text
            style={[
              styles.filterButtonText,
              selectedFilter === filter && { color: "white" },
            ]}
          >
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const tiposTreino = ["Todos", "Peito", "Costas", "Bíceps", "Tríceps", "Perna"];

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 20,
    marginLeft: 10,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  selectedFilterButton: {
    backgroundColor: rosaTurquesa,
    borderWidth: 0,
  },
  filterButtonText: {
    fontFamily: "Poppins-Medium",
  },
});

export default ButtonGroup;
