import React from 'react';
import { View, StyleSheet } from "react-native";
import WordsComponent from './WordsComponent';
import ImagesComponent from "./ImagesComponent";

const WordExercice = (props) => {
  const {letter} = props;

  return (
    <View style={styles.content}>
      <ImagesComponent letter={letter} />
      <WordsComponent letter={letter} />
    </View>
  );
};

export default WordExercice;

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
});
