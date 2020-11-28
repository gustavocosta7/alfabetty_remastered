import React from 'react';
import {Text, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import DATA from '../assets/data/data';
import ActivitySliderComp from './ActivitySliderComp';
import ActivityListHeader from './ActivityListHeader';

const ExercisesListComp = () => {
  return (
    <FlatList
      ListHeaderComponent={ActivityListHeader}
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
      <ActivitySliderComp words={props.letters} />
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
