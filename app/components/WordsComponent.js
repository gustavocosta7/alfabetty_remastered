import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WordsComponent = (props) => {
  return (
    <View style={styles.containerText}>
      <Text style={styles.text}>{props.letter.descricao}</Text>
      <Text style={[styles.text, styles.manuscrito]}>
        {props.letter.descricao}
      </Text>
    </View>
  );
};

export default WordsComponent;

const styles = StyleSheet.create({
  containerText: {
    paddingTop: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 80,
    color: '#ffffff',
    elevation: 4,
    textShadowColor: '#1a1a1a',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
  },
  manuscrito: {
    fontFamily: 'irineu',
    fontSize: 100,
  },
});
