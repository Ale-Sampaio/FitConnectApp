import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";
import { rosaTurquesa } from '../../assets/colors/index';

const FollowContainer = () => {
  const [fontsLoaded] = useFonts({
    "PoppinsLight": require('../../assets/fonts/Poppins-Light.ttf'),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.topBar}>
      <View style={styles.userPost}>
        <Image
          source={require('../../assets/images/logoPerfil.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Growth</Text>
      </View>
      <TouchableOpacity style={styles.buttonFollow}>
        <Text style={styles.followText}>Seguir</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  userPost: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#fff",
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  buttonFollow: {
    backgroundColor: rosaTurquesa,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  followText: {
    fontFamily: "PoppinsLight",
    fontSize: 14,
    color: "#fff",
  },
});

export default FollowContainer;
