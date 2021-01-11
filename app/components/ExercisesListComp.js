import React, {useEffect, useState} from 'react';
import {Text, FlatList, View, SafeAreaView, StyleSheet} from 'react-native';
import DATA from '../assets/data/data';
import ActivitySliderComp from './ActivitySliderComp';
import ActivityListHeader from './ActivityListHeader';
import DbRepository from '../repository/dbRepository';

const ExercisesListComp = () => {
  const [category, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const categories = await DbRepository.getCategories();
      setCategories(categories);
    }

    loadCategories();
  }, []);

  return (
    <FlatList
      ListHeaderComponent={ActivityListHeader}
      data={category}
      renderItem={({item, index}) => {
        return (
          <>
            <Text style={styles.category}>{item.descricao}</Text>
            <LetterList letters={item.letras} />
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
