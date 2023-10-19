import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

import LoginScreen from "./src/pages/login";
import WelcomeScreen from "./src/pages/welcome";
import CadastroScreen from "./src/pages/cadastro";
import ConfigPerfilScreen from "./src/pages/ConfiguracaoPerfil";
import MetaScreen from "./src/pages/meta";
import FeedScreen from "./src/pages/feed";
import PerfilScreen from "./src/pages/Perfil";

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
          name="Feed"
          component={FeedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
