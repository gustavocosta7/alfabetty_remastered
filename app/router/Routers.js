import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Home from '../pages/HomePage';
import StudyPlanPage from '../pages/StudyPlanPage';
import ExercisesPage from '../pages/ExercicesPage';

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
      <Scene key="exercises" component={ExercisesPage} title="Exercícios" />
    </Stack>
  </Router>
);

export default Routers;
