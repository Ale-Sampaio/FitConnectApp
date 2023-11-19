import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import CardTreino from "../components/treinoComponents/cardTreino";
import { useNavigation } from "@react-navigation/native";
import { cinzaDark, rosaTurquesa } from "../assets/colors";

const Favoritos = ({ route }) => {
  const { favoritos, favoritosKey, removeFromFavoritesTreino } = route.params || {
    favoritos: [],
    favoritosKey: "",
    removeFromFavoritesTreino: () => {},
  };
  const navigation = useNavigation();
  const [favoritosList, setFavoritosList] = useState([...favoritos]);

  const handleVoltarPress = () => {
    navigation.goBack();
  };

  const handleCardPress = (item) => {
    navigation.navigate("ListaTreino", { treinoData: item });
  };

  const handleRemoveFromFavorites = (item) => {
    removeFromFavoritesTreino(item);
    const updatedFavoritos = favoritosList.filter((f) => f.titulo !== item.titulo);
    setFavoritosList(updatedFavoritos);
  };

  useEffect(() => {
    if (favoritosKey) {
      navigation.setParams({ favoritos: favoritosList });
    }
  }, [favoritosList, favoritosKey, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tituloHeader}>Treinos Favoritos</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {favoritosList.length > 0 ? (
          favoritosList.map((item, index) => (
            <View key={index} style={styles.cardContainer}>
              <CardTreino
                titulo={item.titulo}
                subtitulo={item.subtitulo}
                imagemFundo={item.imagemFundo}
                onCardPress={() => handleCardPress(item)}
                onFavoritePress={() => handleRemoveFromFavorites(item)}
                isFavorite={true} 
              />
              <TouchableOpacity onPress={() => handleRemoveFromFavorites(item)}>
                <Text style={styles.removerTexto}>Remover dos Favoritos</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.semFavoritos}>
            Você ainda não possui favoritos.
          </Text>
        )}
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: rosaTurquesa,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: "100%",
    height: 120
  },
  tituloHeader: {
    fontSize: 24,
    fontFamily: "Poppins-Medium",
    color: "#fff",
    textAlign: "center",
    marginTop: 60,
  },
  scrollViewContent: {
    marginTop:20,
    gap: 10,
    marginLeft: 15,
  },
  semFavoritos: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "PoppinsLight",
    color: "#555",
    marginTop: 20,
  },
  cardTreino: {
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
  },
  cardContainer: {
    marginBottom: 20,
  },
  removerTexto: {
    color: cinzaDark,
    textAlign: "center",
    marginTop: 5,
    fontFamily: "PoppinsLight",
  },
  botaoVoltar: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 20,
    width: 370,
  },
  textoBotaoVoltar: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins-Medium",
  },
});

export default Favoritos;
