import React from 'react';
import {StatusBar} from 'react-native';
import Routers from './app/router/Routers';
import DbRepository from './app/repository/dbRepository';

const App: () => React$Node = () => {
  DbRepository.setup();
  return (
    <>
      <StatusBar hidden />
      <Routers />
    </>
  );
};

export default App;
