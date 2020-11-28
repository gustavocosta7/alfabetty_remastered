import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Home from '../pages/HomePage';
import StudyPlanPage from '../pages/StudyPlanPage';

const Routers = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home} hideNavBar />
      <Scene
        key="studyPlan"
        component={StudyPlanPage}
        title="Atividades"
        hideNavBar
      />
    </Stack>
  </Router>
);

export default Routers;
