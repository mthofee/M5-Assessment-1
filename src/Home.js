import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import * as firebase from "firebase";
import 'firebase/firestore';
import { loggingOut } from "./Auth";


export default function Home({ navigation }) {
  

  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

   useEffect(() => {
    async function getUserInfo(){
      try {
        let doc = await firebase
          .firestore()
          .collection('users')
          .doc(currentUserUID)
          .get();

        if (!doc.exists){
          Alert.alert('No user data found!')
        } else {
          let dataObj = doc.data();
          setFirstname(dataObj.firstname)
          setLastname(dataObj.lastname),
          setAddress(dataObj.address),
          setEmail(dataObj.email)
         
        }
      } catch (err){
      Alert.alert('There is an error.', err.message)
      }
    }
    getUserInfo();
  })

  const handlePress = () => {
    loggingOut();
    navigation.replace('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Dashboard</Text>
      <Text style={styles.text}>Hi {firstname}</Text>
      <Text style={styles.text}> {lastname}</Text>
      <Text style={styles.text}> {email}</Text>
      <Text style={styles.text}> {address}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    padding: 5,
    backgroundColor: '#ff9999',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize:20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#3FC5AB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    marginTop: '2%',
    marginBottom: '10%',
    fontWeight: 'bold',
    color: 'black',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2E6194',
  },
});