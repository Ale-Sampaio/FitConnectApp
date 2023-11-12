import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useNavigation } from "@react-navigation/native";


export default function TabBar() {
  const [fontsLoaded] = useFonts({
    "Poppins-ExtraLight": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    "PoppinsLight": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  const [activeTab, setActiveTab] = useState("home");
  const navigation = useNavigation();

  if (!fontsLoaded) {
    return null;
  }

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const renderTabItem = (iconName, tabName) => (
    <TouchableOpacity
      style={[styles.tabItem, activeTab === tabName && styles.activeTab]}
      onPress={() => {
        handleTabPress(tabName);
        if (tabName === 'Perfil') {
          navigation.navigate("Perfil");
        }
      }}
    >
      <FontAwesome name={iconName} size={24} color={activeTab === tabName ? "#fff" : "#333333"} />
      <Text style={[styles.tabText, activeTab === tabName && styles.activeTabText]}>{tabName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderTabItem("home", "Home")}
      {renderTabItem("heart", "Saude")}
      {renderTabItem("check", "Treino")}
      {renderTabItem("calendar", "Agenda")}
      {renderTabItem("user", "Perfil")}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingBottom: 40,
    paddingHorizontal: 10, 
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    alignItems: 'center',
    paddingHorizontal: 20, 
  },
  tabText: {
    fontFamily: 'PoppinsLight',
    fontSize: 12,
    color: '#333333',
  },
  activeTab: {
    backgroundColor: '#C13DFF', 
    borderRadius: 30,
    padding: 2,
  },
  activeTabText: {
    color: '#fff',
  },
});
