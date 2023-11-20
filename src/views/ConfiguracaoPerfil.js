import React, { useState } from "react";
import { useFonts } from "expo-font";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { cinzaLow, rosaTurquesa } from "../assets/colors";

export default function ConfiguracaoPerfil() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  const genderOptions = ["Masculino", "Feminino", "Outro"];

  const [nome, setNome] = useState(null);
  const [idade, setIdade] = useState(null);
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNavigateToMeta = () => {
    if (!nome || !idade || !altura || !peso || !selectedGender) {
      setErrorMessage("Preencha todos os campos antes de continuar.");
      return;
    }

    setErrorMessage("");
    navigation.navigate("Treino", { nome }); // Passa o nome como parâmetro
    console.log("Informações do perfil:");
    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("Altura:", altura);
    console.log("Peso:", peso);
    console.log("Gênero:", selectedGender);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>
          Primeiro, vamos{"\n"}
          <Text style={styles.titleTextBold}>Configurar</Text> seu Perfil
        </Text>
      </View>

      <View style={styles.inputTextContainer}>
        <View style={styles.inputTextField}>
          <Text style={styles.textInput}>Qual é o seu nome?</Text>
          <TextInput
            style={styles.inputField}
            placeholder="ex: João"
            returnKeyType="next"
            onChangeText={(value) => setNome(value)}
          />
        </View>
        <View style={styles.inputTextField}>
          <Text style={styles.textInput}>Por favor, informe sua idade</Text>
          <TextInput
            style={styles.inputField}
            placeholder="ex: 20"
            keyboardType="number-pad"
            returnKeyType="done"
            onChangeText={(value) => setIdade(value)}
          />
        </View>
        <View style={styles.inputTextField}>
          <Text style={styles.textInput}>Qual é a sua altura?</Text>
          <TextInput
            style={styles.inputField}
            placeholder="ex: 175"
            keyboardType="number-pad"
            returnKeyType="done"
            onChangeText={(value) => setAltura(value)}
          />
        </View>
        <View style={styles.inputTextField}>
          <Text style={styles.textInput}>Qual é o seu peso?</Text>
          <TextInput
            style={styles.inputField}
            placeholder="ex: 65"
            keyboardType="number-pad"
            returnKeyType="done"
            onChangeText={(value) => setPeso(value)}
          />
        </View>

        <Text style={styles.textInput}>Qual é o seu gênero?</Text>
        <View style={styles.genderButtonsContainer}>
          {genderOptions.map((gender) => (
            <TouchableOpacity
              key={gender}
              style={[
                styles.genderButton,
                selectedGender === gender && styles.selectedGenderButton,
              ]}
              onPress={() => setSelectedGender(gender)}
            >
              <Text
                style={[
                  styles.genderButtonText,
                  selectedGender === gender && { color: "white" },
                ]}
              >
                {gender}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Mensagem de erro */}
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}

        <TouchableOpacity style={styles.button} onPress={handleNavigateToMeta}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
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
  inputTextContainer: {
    marginTop: 50,
  },
  inputTextField: {
    flexDirection: "column",
    marginBottom: 10,
  },
  textInput: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 20,
    fontFamily: "Poppins-Medium",
  },
  inputField: {
    borderWidth: 1,
    borderColor: cinzaLow,
    height: 45,
    width: 350,
    borderRadius: 50,
    paddingLeft: 20,
    fontFamily: "PoppinsLight",
    fontSize: 14,
  },
  button: {
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 50,
    width: 350,
    height: 50,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Poppins-Medium",
  },
  genderButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
    gap: 10,
  },
  genderButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: cinzaLow,
    height: 45,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedGenderButton: {
    backgroundColor: rosaTurquesa,
    borderColor: rosaTurquesa,
  },
  genderButtonText: {
    color: "black",
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
  },
});
