import React from "react";
import { View, StyleSheet } from "react-native";
import UserInfos from "../components/PerfilUserComponents/userInfos";
import DadosCorporais from "../components/PerfilUserComponents/dadosCorporais";
import Hidratacao from "../components/PerfilUserComponents/hidratacao";
import TabBar from "../components/feedComponents/tabBar";
import ContentProfileTab from "../components/PerfilUserComponents/contentProfileTab";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <UserInfos />
      <DadosCorporais />
      <Hidratacao />
      <ContentProfileTab />
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: "white",
  },
});
