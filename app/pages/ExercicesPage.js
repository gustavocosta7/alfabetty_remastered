import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import IntroExercise from '../components/IntroExercise';
import LinearGradient from 'react-native-linear-gradient';
import NextButton from '../assets/svg/next-button';
import WordExercice from '../components/WordExercise';

function getExercise(step, props) {
  switch (step) {
    case 0:
      return <IntroExercise letter={props} />;
    case 1:
      return <WordExercice letter={props} />;
  }
}

const ExercisesPage = (props) => {
  const [step, setStep] = useState(0);
  const {letter} = props;
  const Exercise = getExercise(step, letter.letter);

  return (
    <LinearGradient colors={['#293896', '#0398DB']} style={styles.content}>
      {Exercise}
      <View>
        <TouchableOpacity
          onPress={() => {
            const nextStep = step + 1;
            setStep(nextStep);
          }}>
          <NextButton width="100" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default ExercisesPage;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
