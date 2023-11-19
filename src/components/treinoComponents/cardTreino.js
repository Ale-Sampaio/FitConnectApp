import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { rosaTurquesa } from "../../assets/colors";

const CardTreino = ({
  titulo,
  subtitulo,
  onCardPress,
  onFavoritePress,
  imagemFundo,
  corFundo,
  isFavorite,
}) => {
  const [fontsLoaded] = useFonts({
    "PoppinsLight": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  const [heartColor, setHeartColor] = useState("#fff");

  useEffect(() => {
    setHeartColor(isFavorite ? rosaTurquesa : "#fff");
  }, [isFavorite]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onCardPress}>
      {imagemFundo ? (
        <ImageBackground
          source={imagemFundo}
          style={[
            styles.card,
            styles.imageBackground,
            { backgroundColor: corFundo || rosaTurquesa },
          ]}
          imageStyle={styles.imageBackground}
        >
          {renderCardContent()}
        </ImageBackground>
      ) : (
        <View style={[styles.card, { backgroundColor: corFundo || rosaTurquesa }]}>
          {renderCardContent()}
        </View>
      )}
    </TouchableOpacity>
  );

  function renderCardContent() {
    return (
      <View style={styles.overlay}>
        <View style={styles.cardContent}>
          <Text style={[styles.titulo, styles.textShadow]}>{titulo}</Text>
          <Text style={[styles.subtitulo, styles.textShadow]}>{subtitulo}</Text>
        </View>
        <TouchableOpacity
          style={styles.favoriteContainer}
          onPress={() => onFavoritePress({ titulo, subtitulo })}
        >
          <View style={styles.favoriteIcon}>
            <Ionicons name="heart" size={24} color={heartColor} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 20,
  },
  card: {
    width: 360,
    height: 170,
    padding: 20,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageBackground: {
    borderRadius: 20,
    overflow: "hidden",
  },
  overlay: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  cardContent: {
    flex: 1,
    justifyContent: "flex-end",
  },
  titulo: {
    fontSize: 14,
    fontFamily: "PoppinsLight",
    color: "#fff",
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 20,
    fontFamily: "Poppins-Medium",
    color: "#fff",
    flexWrap: "wrap",
    maxWidth: 270,
  },
  favoriteContainer: {
    justifyContent: "center",
    marginRight: 1,
    marginBottom: 1,
    backgroundColor: "#FFFFFF80",
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  favoriteIcon: {
    alignItems: "center",
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.10)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default CardTreino;
