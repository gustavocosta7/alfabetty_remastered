import React from 'react';
import {Pressable, StyleSheet, Text, View, Icon} from 'react-native';
import StatsStarComp from './StatsStarComp';

const ButtonLetterComp = (props) => {
  const {letter} = props;
  const {drawing} = letter.words[0];

  return (
    <Pressable
      onPress={() => {}}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#7FDBFF' : letter.words[0].color,
        },
        styles.root,
      ]}>
      <View>
        <Text style={styles.text}>{letter.letter.toUpperCase()}</Text>
        <StatsStarComp concluded={letter.concluded} />
      </View>
      <View style={styles.card}>{drawing}</View>
    </Pressable>
  );
};

export default ButtonLetterComp;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    paddingLeft: 40,
  },
  text: {
    color: 'white',
    fontSize: 68,
    fontFamily: 'RobotoMedium',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginBottom: 20,
  },
  card: {
    padding: 10,
  },
  star: {
    marginTop: 20,
  },
});
