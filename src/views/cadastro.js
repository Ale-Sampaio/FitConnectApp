import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
  const navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [confirmaSenha, setConfirmaSenha] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [senhaError, setSenhaError] = useState(null);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  useEffect(() => {
    return () => {
      setEmail(null);
      setSenha(null);
      setConfirmaSenha(null);
      setEmailError(null);
      setSenhaError(null);
      setPasswordVisibility(false);
    };
  }, []);

  const handleNavigateToLogin = () => {
    navigation.navigate("Login");
  };

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validarSenha = (senha) => senha && senha.length >= 3;

  const handleEntrarPress = () => {
    const isEmailValid = validarEmail(email);
    const isSenhaValid = validarSenha(senha);

    setEmailError(isEmailValid ? null : "Email inválido");
    setSenhaError(
      isSenhaValid ? null : "Senha inválida. Deve ter pelo menos 3 caracteres."
    );

    if (isEmailValid && isSenhaValid) {
      console.log("Dados válidos. Salvando...");
      // Enviar dados para o servidor usando fetch

      fetch('http://192.168.0.10:3000/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha}),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.status} - ${response.statusText}`);
        }
        return response.json(); 
      })
      .then(data => {
        console.log("Resposta do servidor:", data.message);
        Alert.alert("Sucesso", "Cadastro feito com sucesso!", [
          {
            text: "OK",
            onPress: () => handleNavigateToLogin(),
          },
        ]);
      })
      .catch(error => {
        console.error("Erro ao enviar dados:", error);
      });
    } else {
      console.log("Dados inválidos. Verifique o email, a senha e a confirmação de senha.");
    };

  };

  const [fontsLoaded] = useFonts({
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleNavigateToLogin}
          style={styles.arrowContainer}
        >
          <FontAwesome name="angle-left" size={28} color="#C13DFF" />
        </TouchableOpacity>
        <Text style={styles.tittleText}>Cadastro</Text>
      </View>
      <View style={styles.inputTextContainer}>
        <InputField
          label="Email"
          placeholder="Digite seu email"
          onChangeText={(value) => setEmail(value)}
          error={emailError}
        />
        <PasswordInputField
          label="Senha"
          placeholder="Crie uma Senha"
          onChangeText={(value) => setSenha(value)}
          error={senhaError}
          visibility={passwordVisibility}
          toggleVisibility={() => setPasswordVisibility(!passwordVisibility)}
        />
        <TouchableOpacity style={styles.button} onPress={handleEntrarPress}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linkCadastro}>
        <TouchableOpacity onPress={handleNavigateToLogin}>
          <Text style={styles.linkText}>
            Já possui uma conta?{" "}
            <Text style={styles.linkCadastroText}>Faça login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const InputField = ({ label, placeholder, onChangeText, error }) => (
  <View style={styles.inputTextField}>
    <Text style={styles.textInput}>{label}</Text>
    <TextInput
      style={styles.inputField}
      placeholder={placeholder}
      paddingLeft={20}
      onChangeText={onChangeText}
    />
    {error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);

const PasswordInputField = ({
  label,
  placeholder,
  onChangeText,
  error,
  visibility,
  toggleVisibility,
}) => (
  <View style={styles.inputTextField}>
    <Text style={styles.textInput}>{label}</Text>
    <View style={styles.passwordInputContainer}>
      <TextInput
        style={styles.passwordInputField}
        placeholder={placeholder}
        paddingLeft={20}
        onChangeText={onChangeText}
        secureTextEntry={!visibility}
      />
      <TouchableOpacity style={styles.eyeIcon} onPress={toggleVisibility}>
        <FontAwesome
          name={visibility ? "eye" : "eye-slash"}
          size={24}
          color="gray"
        />
      </TouchableOpacity>
    </View>
    {error && <Text style={styles.errorText}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 70,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: 10,
  },
  arrowContainer: {
    position: "absolute",
    left: 20,
  },
  tittleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#C13DFF",
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
    borderColor: "#C6C5C5",
    height: 45,
    width: 350,
    borderRadius: 50,
    fontFamily: "PoppinsLight",
    fontSize: 14,
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C6C5C5",
    height: 45,
    width: 350,
    borderRadius: 50,
    fontFamily: "PoppinsLight",
    fontSize: 14,
  },
  passwordInputField: {
    flex: 1,
    paddingLeft: 20,
  },
  eyeIcon: {
    padding: 10,
  },
  linkCadastro: {
    marginTop: 20,
    fontFamily: "PoppinsLight",
  },
  linkCadastroText: {
    color: "#C13DFF",
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
  errorText: {
    color: "red",
    marginTop: 5,
    fontFamily: "Poppins-Medium",
  },
  successText: {
    marginTop: 10,
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    textAlign: "center",
  },
});
