//import liraries
import { StatusBar } from "expo-status-bar";
//import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

// create a component
const Reset = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#FFF"
          autoCapitalize={"none"}
          secureTextEntry={true}
          //onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Cornfirm Password"
          placeholderTextColor="#FFF"
          autoCapitalize={"none"}
          secureTextEntry={true}
          //onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.submitText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCEDC8",
  },

  inputView: {
    backgroundColor: "#689F38",
    //borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },
});

//make this component available to the app
export default Reset;