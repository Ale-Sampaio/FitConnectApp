import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function ContentProfileTab() {
  const [selectedTab, setSelectedTab] = useState("Photos");

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.tabButton,
          selectedTab === "Photos" && styles.selectedTab,
        ]}
        onPress={() => handleTabPress("Photos")}
      >
        <Text style={[styles.tabButtonText, selectedTab === "Photos" && styles.selectedText]}>Photos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tabButton,
          selectedTab === "Videos" && styles.selectedTab,
        ]}
        onPress={() => handleTabPress("Videos")}
      >
        <Text style={[styles.tabButtonText, selectedTab === "Videos" && styles.selectedText]}>Videos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tabButton,
          selectedTab === "Other" && styles.selectedTab,
        ]}
        onPress={() => handleTabPress("Other")}
      >
        <Text style={[styles.tabButtonText, selectedTab === "Other" && styles.selectedText]}>Other</Text>
      </TouchableOpacity>
    
      {/* Add content for other tabs as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 16,
  },
  tabButton: {
    padding: 10,
    borderRadius: 8,
  },
  selectedTab: {
    backgroundColor: "#007BFF", // Add your selected tab background color
  },
  tabButtonText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#333", // Add your tab button text color
  },
  selectedText: {
    color: "#FFF", // Color to change when selected
  },
});
