import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import CardTreino from "../components/treinoComponents/cardTreino";
import CustomTitle from "../components/treinoComponents/customTitle";
import ButtonGroup from "../components/treinoComponents/buttonGroup";
import treinoData from "../ProgramasTreinos/treinoData";
import { cinzaDark, rosaTurquesa } from "../assets/colors";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Treino = ({ route }) => {
  const navigation = useNavigation();
  const { nome } = route.params;
  const [fontsLoaded] = useFonts({
    PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  const [filteredData, setFilteredData] = useState(
    shuffleArray([...treinoData])
  );

  const [originalFixedCard] = useState(
    treinoData.find((item) => item.titulo.includes("FitConnect"))
  );
  const [fixedCard, setFixedCard] = useState(originalFixedCard);

  const [favoritos, setFavoritos] = useState([]);

  if (!fontsLoaded) {
    return null;
  }

  const handleFilterPress = (filter) => {
    let newData = [];
    if (filter === "Todos") {
      newData = shuffleArray([...treinoData]);
    } else {
      newData = shuffleArray([
        ...treinoData.filter((item) => {
          if (filter === "Costas") {
            return (
              item.titulo.includes("Costas") ||
              item.titulo.includes("Lombar") ||
              item.titulo.includes("Coluna")
            );
          } else if (filter === "Triceps") {
            return item.titulo.includes("Triceps");
          } else {
            return item.titulo.includes(filter);
          }
        }),
      ]);
    }

    setFilteredData(newData);
  };

  const handleCardPress = (cardData) => {
    navigation.navigate("ListaTreino", { treinoData: cardData });
  };

  const handleRemoveFromFavoritesTreino = (item) => {
    const updatedFavoritos = favoritos.filter(
      (f) => f.titulo !== item.titulo && f.subtitulo !== item.subtitulo
    );
    setFavoritos(updatedFavoritos);
  };

  const handleFavoritePress = (cardData) => {
    const isFavorite = favoritos.some(
      (item) =>
        item.titulo === cardData.titulo && item.subtitulo === cardData.subtitulo
    );

    if (isFavorite) {
      const updatedFavoritos = favoritos.filter(
        (item) => item.titulo !== cardData.titulo
      );
      setFavoritos(updatedFavoritos);
      console.log("Título removido dos favoritos:", cardData.titulo);
    } else {
      setFavoritos((prevFavoritos) => [...prevFavoritos, cardData]);
      console.log("Título adicionado aos favoritos:", cardData.titulo);
    }
  };

  const handleFavoritesPagePress = () => {
    navigation.navigate("Favoritos", {
      favoritos,
      favoritosKey: "treino",
      setFavoritos,
      removeFromFavoritesTreino: handleRemoveFromFavoritesTreino,
    });
  };

  const renderCard = ({ item }) => (
    <CardTreino
      titulo={item.titulo}
      subtitulo={item.subtitulo}
      imagemFundo={item.imagemFundo}
      onCardPress={() => handleCardPress(item)}
      onFavoritePress={() => handleFavoritePress(item)}
      isFavorite={favoritos.some((f) => f.titulo === item.titulo)}
    />
  );

  const white = "#fff";

  return (
    <View style={styles.container}>
      <View style={styles.links}>
        <Text style={styles.fitconnect}>Olá, {nome}</Text>
        <TouchableOpacity onPress={handleFavoritesPagePress}>
          <FontAwesome
            name="heart"
            size={24}
            color={cinzaDark}
            marginRight={15}
            marginTop={60}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.header}>
          <CustomTitle title="Exclusivos FitConnect" />
        </View>
        <FlatList
          style={styles.fixedFlatList}
          horizontal
          data={[fixedCard]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCard}
          contentContainerStyle={styles.flatListContent}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.section}>
          <CustomTitle title="Programas de Treinamento" />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.treinoButtons}
        >
          <ButtonGroup onFilterPress={handleFilterPress} />
        </ScrollView>
        <FlatList
          style={styles.flatMixed}
          horizontal
          data={filteredData.slice(0, 3)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCard}
          contentContainerStyle={styles.flatListContent}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          style={styles.flatMixed}
          horizontal
          data={filteredData.slice(3, 6)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCard}
          contentContainerStyle={styles.flatListContent}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          style={styles.flatMixed}
          horizontal
          data={filteredData.slice(6, 9)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCard}
          contentContainerStyle={styles.flatListContent}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          style={styles.flatMixed}
          horizontal
          data={filteredData.slice(9, 12)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderCard}
          contentContainerStyle={styles.flatListContent}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginBottom: 10,
    marginLeft: 12,
  },
  flatListContent: {
    height: 180,
    paddingHorizontal: 10,
  },
  section: {
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  treinoButtons: {
    paddingHorizontal: 10,
  },
  fixedFlatList: {
    height: 180,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  flatMixed: {
    height: 180,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  favoriteText: {
    fontSize: 15,
    fontFamily: "PoppinsLight",
    marginRight: 10,
  },
  links: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 120,
  },
  fitconnect: {
    marginLeft: 15,
    fontSize: 22,
    marginTop: 60,
    fontFamily: "PoppinsLight",
    color: cinzaDark,
  },
});

export default Treino;
