
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './app/src/screens/WelcomeScreen';
import MyBookScreen from './app/src/screens/MyBookScreen';

const Stack = createStackNavigator();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="MyBook" component={MyBookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;