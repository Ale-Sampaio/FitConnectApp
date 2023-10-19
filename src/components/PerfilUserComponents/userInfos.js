import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";

export default function UserInfos() {
  const [fontsLoaded] = useFonts({
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.userInfos}>
        <Image
          source={require("../../assets/images/Perfil.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Fabiola Castanho</Text>
      </View>
      <View style={styles.iconsBox}>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="gear" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  userInfos: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20
  },
  userName: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, 
    marginRight: 15,
  },
  iconsBox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
    gap: 20
  },
  
});
