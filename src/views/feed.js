import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../components/feedComponents/header";
import TabBar from "../components/feedComponents/tabBar";
import Post from "../components/feedComponents/post";


export default function Feed() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.feedContent}>
        <Post />
        <Post />
        <Post />
      </ScrollView>
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
  },
  feedContent: {},
});
