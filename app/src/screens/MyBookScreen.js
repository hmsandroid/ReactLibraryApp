import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const MyBookScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>My Book List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15
  }
});

export default MyBookScreen;
