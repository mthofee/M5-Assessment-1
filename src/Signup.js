//import liraries
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { registration } from "./Auth";

// create a component
const Signup = ({ navigation }) => {
  //const navigation = useNavigation();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /*useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Login");
      }
    });
     }, []);*/

  const emptyState = () => {
    setFirstname("");
    setLastname("");
    setAddress("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handlePress = () => {
    if (!firstname) {
      Alert.alert("First name is required");
    } else if (!email) {
      Alert.alert("Email field is required.");
    } else if (!password) {
      Alert.alert("Password field is required.");
    } else if (!confirmPassword) {
      setPassword("");
      Alert.alert("Confirm password field is required.");
    } else if (password !== confirmPassword) {
      Alert.alert("Password does not match!");
    } else {
      registration(email, password, lastname, firstname, address);
      navigation.navigate("Login");
      emptyState();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First name"
          value={firstname}
          autoCapitalize={"sentences"}
          placeholderTextColor="#FFF"
          onChangeText={(text) => setFirstname(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last name"
          value={lastname}
          autoCapitalize={"sentences"}
          placeholderTextColor="#FFF"
          onChangeText={(text) => setLastname(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Physical address"
          value={address}
          autoCapitalize={"sentences"}
          placeholderTextColor="#FFF"
          onChangeText={(text) => setAddress(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email*"
          value={email}
          autoCapitalize={"none"}
          keyboardType="email-address"
          placeholderTextColor="#FFF"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password*"
          value={password}
          autoCapitalize={"none"}
          placeholderTextColor="#FFF"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password*"
          value={confirmPassword}
          autoCapitalize={"none"}
          placeholderTextColor="#FFF"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.submitBtn} onPress={handlePress}>
        <Text style={styles.submitText}>Submit</Text>
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
export default Signup;
