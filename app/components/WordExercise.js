import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import getImage from '../services/importImagesService';
import getSvg from '../services/importSvgService';

const WordExercice = (props) => {
  return (
    <View style={styles.content}>
      <View style={styles.images}>
        {getSvg(props.letter.alias)}
        <Image
          style={{width: 150, height: 150, marginLeft: 50}}
          source={getImage(props.letter.alias)}
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>{props.letter.descricao}</Text>
        <Text style={[styles.text, styles.manuscrito]}>
          {props.letter.descricao}
        </Text>
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
    fontFamily: 'irineu',
    fontSize: 100,
  },
});
