import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const IntroExercise = (props) => {
  const {letter} = props;
  return (
    <View style={styles.content}>
      <View style={styles.first}>
        <Text style={[styles.text]}>{letter.toUpperCase()}</Text>
        <Text style={[styles.text]}>{letter}</Text>
      </View>

      <View style={[styles.first, styles.second]}>
        <Text style={[styles.text, styles.manuscrito]}>
          {letter.toUpperCase()}
        </Text>
        <Text style={[styles.text, styles.manuscrito]}> {letter}</Text>
      </View>
    </View>
  );
};

export default IntroExercise;

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
  },
  first: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  second: {
    marginTop: 50,
  },
  text: {
    fontSize: 100,
    color: '#ffffff',
    elevation: 4,
    textShadowColor: '#1a1a1a',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
  },
  manuscrito: {
    fontFamily: 'Lumen',
    fontSize: 130,
    marginLeft: 40,
    marginRight: 40,
  },
});
