import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import WordsComponent from './WordsComponent';
import ImagesComponent from './ImagesComponent';
import Microphone from '../assets/svg/mic-svg';

const SpeechExercise = (props) => {
  const {letter} = props;
  return (
    <View>
      <ImagesComponent letter={letter} />
      <WordsComponent letter={letter} />
      <TouchableOpacity onPress={() => {}} style={styles.roundButton}>
        <Microphone width={30} />
      </TouchableOpacity>
    </View>
  );
};

export default SpeechExercise;

const styles = StyleSheet.create({
  content: {},
  roundButton: {
    width: 80,
    height: 80,
    elevation: 4,
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#FF0505',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: '35%',
  },
});
