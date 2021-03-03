import React, {useState, useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import getSvg from '../services/importSvgService';
import StatsStarComp from './StatsStarComp';
import {Actions} from 'react-native-router-flux';

const ButtonLetterComp = (props) => {
  const {letter} = props;
  const [defaultSvg, setDefaultSvg] = useState('');
  useEffect(() => {
    async function setSvg() {
      try {
        setDefaultSvg(letter.palavras[0].alias);
      } catch (e) {}
    }

    setSvg();
  }, []);

  return (
    <Pressable
      onPress={() => {
        Actions.exercises({letter: letter});
      }}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#7FDBFF' : '#7FDBFF',
        },
        styles.root,
      ]}>
      <View>
        <Text style={styles.text}>{letter.descricao}</Text>
        <StatsStarComp concluded={letter.porcentagem} />
      </View>
      <View style={styles.card}>{getSvg(defaultSvg)}</View>
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
    elevation: 4,
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
