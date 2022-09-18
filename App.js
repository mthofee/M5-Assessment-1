import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Login";
import Reset from "./src/Reset";
import Signup from "./src/Signup";
import Home from "./src/Home";
import * as firebase from "firebase";
import firebaseConfig from "./src/firebase";

const Stack = createNativeStackNavigator();

export default function App() {
  if (!firebase.apps.length) {
    console.log("Firebase is connected");
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: "Create account" }}
        />
        <Stack.Screen name="Password reset" component={Reset} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCEDC8",
    alignItems: "center",
    justifyContent: "center",
  },
});
