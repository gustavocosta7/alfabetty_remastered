import React from 'react';
import {StatusBar} from 'react-native';
import Routers from './app/router/Routers';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden />
      <Routers />
    </>
  );
};

export default App;
