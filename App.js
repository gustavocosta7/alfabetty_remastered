import React from 'react';
import {StatusBar} from 'react-native';
import Routers from './app/router/Routers';
import Startup from './app/database/startup';

const App: () => React$Node = () => {
  Startup();
  return (
    <>
      <StatusBar hidden />
      <Routers />
    </>
  );
};

export default App;
