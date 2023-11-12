import React from "react";
import { useFonts } from "expo-font";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const startImage = require("../assets/images/WomanBackground.png");

export default function TelaInicio() {
  const navigation = useNavigation();

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
      <ImageBackground source={startImage} style={styles.startImage}>
        <View style={styles.overlay}>
          <View style={styles.card}>
            <View style={styles.titles}>
              <Text style={styles.titleMain}>Transforme o seu estilo de</Text>
              <Text style={styles.titleMain}>vida com o FitConnect! 🏋️‍♂️</Text>
            </View>

            <View style={styles.titles}>
              <Text style={styles.subTitle}>
                Conecte-se com profissionais e amantes do fitness.
              </Text>
              <Text style={styles.subTitle}>
                Alcance seus objetivos com o FitConnect!! 💪
              </Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.buttonText}>Vamos lá</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  card: {
    height: 330,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  titles: {
    marginTop: 20,
  },
  titleMain: {
    color: "#000",
    fontSize: 28,
    fontStyle: "normal",
    fontFamily: "Poppins-Medium",
  },
  subTitle: {
    fontSize: 14,
    fontStyle: "normal",
    textAlign: "center",
    fontFamily: "PoppinsLight",
  },
  button: {
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 50,
    width: 350,
    height: 50,
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Poppins-Medium",
  },
});
