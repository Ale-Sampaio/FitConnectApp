import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import LoginScreen from "./src/views/login";
import WelcomeScreen from "./src/views/welcome";
import CadastroScreen from "./src/views/cadastro";
import ConfigPerfilScreen from "./src/views/ConfiguracaoPerfil";
import MetaScreen from "./src/views/meta";
import TreinoScreen from "./src/views/treino";
import ListaTreinosScreen from "./src/views/listaTreinos";
import FavoritosScreen from "./src/views/favoritos";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfigPerfil"
          component={ConfigPerfilScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Meta"
          component={MetaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Treino"
          component={TreinoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListaTreino"
          component={ListaTreinosScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Favoritos"
          component={FavoritosScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
