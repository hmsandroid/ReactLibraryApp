import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground, Image, TextStyle, NativeModules } from "react-native";
import { color } from "react-native-reanimated";
import { AppContext } from '../AppContext';
import Account from '../account';
const WelcomeScreen = ({ navigation }) => {

  const [isHmsAvailable, setIsHmsAvailable] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function checkHmsAvailability() {
      const isHmsAvailable = await NativeModules.HmsUtils.isHmsAvailable();
      setIsHmsAvailable(isHmsAvailable);
      setIsReady(true);
    }

    checkHmsAvailability();
  }, []);


  const [user, setUser] = useState(null);

  const handleLogin = () => {
    NativeModules.HMSLogin.login().then(
      account => {
        setUser(account);
      },
      (code, message) => {
        console.log(message);
      },
    );
  };

  const handleLogout = () => {
    NativeModules.HMSLogin.logout();
    setUser(null);
  };
  const Login = () => {
    return <ImageBackground
      style={styles.background}
      source={require("../assets/images/welcome.jpg")}>

      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/images/logo.png")} />
        <Text style={styles.slogan}>Manage your library easily</Text>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin()}>
        <Text style={styles.textSign}> Login</Text>
      </TouchableOpacity>
    </ImageBackground>;
  };
  const Logout = () => {
    const { displayName, idToken, email, countryCode, photoUriString } = user;
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/images/welcome.jpg")}>

        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/images/logo.png")} />
          <Text style={styles.slogan}>Manage your library easily</Text>
          <Text style={styles.welcome}>{`Welcome ${displayName}`}</Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('MyBook')}>
          <Text style={styles.textSign}> Go to My Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={() => handleLogout()}>
          <Text style={styles.textSign}> Logout</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };

  return (
    !user ? <Login /> : <Logout />
  );
};


const App = () => {
  return (
    <>
      {isReady && (
        <AppContext isHmsAvailable={isHmsAvailable}>
          <Account />
        </AppContext>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
  loginButton: {
    justifyContent: "center",
    width: "95%",
    height: 50,
    backgroundColor: "#fc5c65",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
    opacity: .9
  },
  logoutButton: {
    justifyContent: "center",
    width: "30%",
    height: 50,
    alignItems: "center",
    backgroundColor: "#4ecdc4",
    marginVertical: 5,
    borderRadius: 10,
    opacity: .9
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 55,
    alignItems: "center"
  },
  slogan: {
    fontSize: 25,
    color: "white",

  },
  buttonsView: {
    padding: 10
  },
  textSign: {
    fontSize: 18,
    color: "white",
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 70,
    margin: 20,
  },
  welcome: {
    fontSize: 17,
    color: "white",
    fontWeight: 'bold'
  },
});
export default WelcomeScreen;
