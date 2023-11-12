import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";

export default function Header() {
  const [fontsLoaded] = useFonts({
    "Poppins-ExtraLight": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    "PoppinsLight": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Text style={styles.titleText}>FitConnect</Text>
      </View>

      <View style={styles.chatView}>
        <TouchableOpacity style={styles.message}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.message}>
          <FontAwesome name="comment" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
    
  },
  title: {
    flex: 1,
    marginLeft: 30,
  },
  titleText: {
    fontFamily: "PoppinsLight",
    fontSize: 24,
  },
  chatView: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 30,
    gap: 20
  },
 
});
