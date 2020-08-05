/**
  libraryApp by Onur
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,

} from 'react-native';

import {

  Colors,
 
} from 'react-native/Libraries/NewAppScreen';

const Hello = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>LibraryApp</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  }
});

export default Hello;
