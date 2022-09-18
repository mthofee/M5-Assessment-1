import * as firebase from "firebase";
import { Alert } from "react-native";

export async function registration(
  email,
  password,
  lastname,
  firstname,
  address
) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("user").doc(currentUser.uid).set({
      email: currentUser.email,
      address: address,
      firstname: firstname,
      lastname: lastname
      
      
    });
  } catch (error) {
    Alert.alert("Oops somthing went wrong", error.message);
  }
}

export async function signIn(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}
