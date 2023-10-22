import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import FollowContainer from "../PostComponents/followContainer";

const Post = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-ExtraLight": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    "PoppinsLight": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/imageTeste.png")}
        style={styles.postImage}
        resizeMode="cover"
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.overlay}>
          <FollowContainer />
          <View style={styles.bottomBar}>
            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.buttonLike}>
                <FontAwesome name="heart" size={20} color={'white'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonLike}>
                <FontAwesome name="comments" size={20} color={'white'} />
              </TouchableOpacity>
            </View>
            <View style={styles.saveButton}>
              <TouchableOpacity style={styles.buttonSave}>
                <FontAwesome name="bookmark" size={16} color={'white'} />
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.postTitle}>
        <Text style={styles.titleText}>Dominando o Peso: Uma Jornada de Força e Determinação! 💪</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  postImage: {
    aspectRatio: 4 / 5,
    width: "100%",
    overflow: "hidden",
  },
  overlay: {
    flex: 1,
  },
  
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: 10,
    right: 0,
  },
  socialButtons: {
    flexDirection: "row",
  },
  buttonLike: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  buttonSave: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontFamily: "PoppinsLight",
    fontSize: 14,
    marginLeft: 5,
    color: "#fff",
  },
  saveButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  postTitle: {
    padding: 10,
  },
  titleText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    marginBottom: 10,
    color: "black",
  },
});

export default Post;
