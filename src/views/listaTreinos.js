import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { cinzaLow, rosaTurquesa } from "../assets/colors";

const ListaTreino = ({ route }) => {
  const { treinoData } = route.params;
  const navigation = useNavigation();

  const [exerciciosFeitos, setExerciciosFeitos] = useState(
    Array(treinoData.exercicios.length).fill(false)
  );

  const handleExercicioPress = (index) => {
    const novosExerciciosFeitos = [...exerciciosFeitos];
    novosExerciciosFeitos[index] = !novosExerciciosFeitos[index];
    setExerciciosFeitos(novosExerciciosFeitos);
  };

  const handleVoltarPress = () => {
    navigation.goBack();
  };

  const [fontsLoaded] = useFonts({
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const daysOfWeek = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const currentDayOfWeek = daysOfWeek[new Date().getDay()];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>{treinoData.titulo}</Text>
        <Text style={styles.subtitulo}>{treinoData.subtitulo}</Text>
        <Text style={styles.diaSemanaAtual}>{currentDayOfWeek}</Text>
      </View>

      <ScrollView style={styles.exerciciosContainer}>
        {treinoData.exercicios.map((exercicio, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.exercicioItem,
              exerciciosFeitos[index] && styles.exercicioFeito,
            ]}
            onPress={() => handleExercicioPress(index)}
          >
            <Text style={styles.exercicioTitulo}>{exercicio.titulo}</Text>
            <Text style={styles.exercicioDescricao}>{exercicio.descricao}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={handleVoltarPress} style={styles.botaoVoltar}>
        <Text style={styles.textoBotaoVoltar}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 70,
  },
  header: {
    padding: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Poppins-Medium",
  },
  subtitulo: {
    fontSize: 16,
    color: "#555",
    fontFamily: "PoppinsLight",
    textAlign: "center",
  },
  diaSemanaAtual: {
    fontSize: 20,
    color: rosaTurquesa,
    fontFamily: "Poppins-Medium",
    marginBottom: 10,
    marginTop: 10,
  },
  exerciciosContainer: {
    flex: 1,
    padding: 20,
  },
  exercicioItem: {
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: cinzaLow,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  exercicioFeito: {
    backgroundColor: rosaTurquesa,
    color: "#fff",
  },
  exercicioTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins-Medium",
    marginBottom: 5,
    color: "#333",
  },
  exercicioDescricao: {
    fontSize: 14,
    fontFamily: "PoppinsLight",
    color: "#666",
  },
  botaoVoltar: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    margin: 20,
  },
  textoBotaoVoltar: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins-Medium",
  },
});

export default ListaTreino;
