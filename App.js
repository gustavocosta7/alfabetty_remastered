/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import Home from './app/pages/HomePage';

const back = require('./app/assets/img/back.jpg')

const App: () => React$Node = () => {
  return (
    <>
    <ImageBackground
      source={back}
      style={styles.backgroundImage}
    >
      <Home/>
    </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex:  1
  }
});

export default App;
