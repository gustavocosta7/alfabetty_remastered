import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import PineappleSvg from '../assets/svg/words/pineapple-svg';

const WordExercice = () => {
  return (
    <View style={styles.content}>
      <View style={styles.images}>
        <PineappleSvg width={130} />
        <Image
          style={{width: 150, height: 150}}
          source={require('../assets/img/words/pineapple-image.png')}
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>Abacaxi</Text>
        <Text style={[styles.text, styles.manuscrito]}>Abacaxi</Text>
      </View>
    </View>
  );
};

export default WordExercice;

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  images: {
    flexDirection: 'row',
    paddingTop: 50,
  },
  containerText: {
    paddingTop: 80,
  },
  text: {
    fontSize: 80,
    color: '#ffffff',
    elevation: 4,
    textShadowColor: '#1a1a1a',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
  },
  manuscrito: {
    fontFamily: 'Lumen',
    fontSize: 100,
  },
});
