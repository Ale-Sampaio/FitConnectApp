import React, { useState } from "react";
import { useFonts } from "expo-font";
import { rosaTurquesa, cinzaLow } from "../assets/colors/index";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  const handleNavigateToCadastro = () => {
    navigation.navigate("Cadastro");
  };

  const handleNavigateToConfiguraoPerfil = () => {
    navigation.navigate("ConfigPerfil");
  };

  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [senhaError, setSenhaError] = useState(null);

  const validarEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validarSenha = () => {
    return senha && senha.length >= 3;
  };

  const [fontsLoaded] = useFonts({
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleEntrarPress = () => {
    if (!validarEmail()) {
      setEmailError("Email inválido");
    } else {
      setEmailError(null);
    }

    if (!validarSenha()) {
      setSenhaError("Senha inválida. Deve ter pelo menos 3 caracteres.");
    } else {
      setSenhaError(null);
    }

    // Verifica se ambos os campos são válidos
    if (validarEmail() && validarSenha()) {
      console.log("Dados válidos. Salvando...");
      handleNavigateToConfiguraoPerfil();
    } else {
      console.log("Dados inválidos. Verifique o email e a senha.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tittleText}>Login</Text>
      </View>
      <View style={styles.inputTextContainer}>
        <View style={styles.inputTextField}>
          <Text style={styles.textInput}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite seu email"
            onChangeText={(value) => setEmail(value)}
            keyboardType="email-address"
            onBlur={() => {
              if (email && !validarEmail()) {
                setEmailError("Email inválido");
              } else {
                setEmailError(null);
              }
            }}
          />
          {emailError && <Text style={styles.errorText}>{emailError}</Text>}
        </View>
        <View style={styles.inputTextField}>
          <Text style={styles.textInput}>Senha</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite sua Senha"
            onChangeText={(value) => setSenha(value)}
            secureTextEntry
            onBlur={() => {
              if (senha && !validarSenha()) {
                setSenhaError(
                  "Senha inválida. Deve ter pelo menos 6 caracteres."
                );
              } else {
                setSenhaError(null);
              }
            }}
          />
          {senhaError && <Text style={styles.errorText}>{senhaError}</Text>}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleEntrarPress}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linkCadastro}>
        <TouchableOpacity onPress={handleNavigateToCadastro}>
          <Text style={styles.linkText}>
            Não possui uma conta?{" "}
            <Text style={styles.linkCadastroText}>Cadastre-se</Text>
          </Text>
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
    paddingTop: 10,
  },
  tittleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: rosaTurquesa,
    fontFamily: "Poppins-Medium",
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
  errorText: {
    color: "red",
    marginTop: 5,
    fontFamily: "Poppins-Medium",
  },
  linkCadastro: {
    marginTop: 20,
    fontFamily: "PoppinsLight",
  },
  linkCadastroText: {
    color: rosaTurquesa,
    fontFamily: "Poppins-Medium",
  },
  button: {
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 50,
    width: 350,
    height: 50,
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Poppins-Medium",
  },
});
