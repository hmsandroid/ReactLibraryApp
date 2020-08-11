import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image, TextStyle } from "react-native";
import { color } from "react-native-reanimated";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/welcome.jpg")}>
      <View style={styles.logoContainer}>
        <Text style={styles.slogan}>Manage your library easily</Text>
        <Image style={styles.logo} source={require("../assets/images/logo.png")} />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('MyBook')}>
        <Text style={styles.textSign}> Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('MyBook')}>
        <Text style={styles.textSign}> Logout</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10
  },
  loginButton: {
    justifyContent:"center",
    width: "95%",
    height: 50,
    backgroundColor: "#fc5c65",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10
  },
  logoutButton: {
    justifyContent:"center",
    width: "95%",
    height: 50,
    alignItems: "center",
    backgroundColor: "#4ecdc4",
    marginVertical: 10,
    borderRadius: 10
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  slogan: {
    fontSize: 25,
    color: "white"
  },
  buttonsView: {
    padding: 10
  },
  textSign: {
    fontSize: 18,
    color: "white",
  }
});
export default WelcomeScreen;
