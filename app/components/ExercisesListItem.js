import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {SvgFromUri, SvgXml} from 'react-native-svg';

import OneStar from '../assets/svg/oneStar.svg';
import Airplane from '../assets/svg/travelling.svg';

const ExercisesListItem = (props) => {
  const {category, letters} = props.data;

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.card} onPress={() => console.log('oi')}>
      <View>
        <Text style={styles.letter}>
          {item.letter.toUpperCase()}
          {item.letter}
        </Text>
        <OneStar />
      </View>
      <View>{item.words[0].drawing}</View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles.category}>{category}</Text>
      <FlatList
        data={letters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExercisesListItem;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0074D9',
    borderRadius: 10,
    paddingLeft: 50,
    marginTop: 10,
    marginLeft: 21,
    marginRight: 21,
    marginBottom: 10,
    height: 175,
  },
  letter: {
    fontSize: 68,
    fontFamily: 'Open Sans',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  ico: {
    justifyContent: 'center',
  },
  category: {
    fontSize: 30,
    fontFamily: 'Open Sans',
    marginLeft: 21,
  },
});
