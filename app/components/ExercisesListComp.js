import React from 'react';
import {Text, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import DATA from '../assets/data/data';
import ButtonLetterComp from './ButtonLetterComp';

const ExercisesListComp = () => {
  return (
    <FlatList
      data={DATA.classification}
      renderItem={({item, index}) => {
        return (
          <>
            <Text style={styles.category}>{item.category}</Text>
            <LetterList letters={item.letters} />
          </>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const LetterList = (props) => {
  return (
    <SafeAreaView>
      <FlatList
        data={props.letters}
        renderItem={({item, index}) => {
          return <ButtonLetterComp letter={item} index={index} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default ExercisesListComp;

const styles = StyleSheet.create({
  category: {
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 30,
    fontFamily: 'RobotoMedium',
  },
});
