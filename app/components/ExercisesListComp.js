import React from 'react';
import {Text, FlatList, View, SafeAreaView} from 'react-native';
import DATA from '../assets/data/data';
import ButtonLetterComp from './ButtonLetterComp';

const ExercisesListComp = () => {
  return (
    <FlatList
      data={DATA.classification}
      renderItem={({item, index}) => {
        return (
          <>
            <Text>{item.category}</Text>
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
          return <ButtonLetterComp letter={item}/>;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default ExercisesListComp;
