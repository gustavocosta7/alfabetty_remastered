import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import StatsStarComp from './StatsStarComp';

const ButtonLetterComp = (props) => {
  const {letter} = props;
  return (
    <Pressable
    onPress={() => {
      console.log(letter);
    }}
    style={({pressed}) => [
      {
        backgroundColor: pressed ? '#7FDBFF' : '#0074D9',
      },
      styles.root
    ]}>
        <View>
          <Text style={styles.text}>
            {letter.letter.toUpperCase()}
            {letter.letter}
          </Text>
          <StatsStarComp concluded={letter.concluded}/>
        </View>
        <View>
          <Text>icone</Text>
        </View>
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
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 68,
    fontFamily: 'Arial Narrow Bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
