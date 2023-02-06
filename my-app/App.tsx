import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AboutScreen,
  ContactScreen,
  EatScreen,
  HomeScreen,
  LoginScreen,
  MapScreen,
} from "./screens";
import { Provider } from "react-redux";
import { store } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Eat" component={EatScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
