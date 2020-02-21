
import React, { Component } from 'react';
import {
Platform
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Login from './src/Login';
import Home from './src/Home';

const Navegador = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navegador.Navigator>
        <Navegador.Screen name="Login" component={Login} />
        <Navegador.Screen name="Home" component={Home} />
      </Navegador.Navigator>
      </NavigationContainer>
  );
}

export default App;