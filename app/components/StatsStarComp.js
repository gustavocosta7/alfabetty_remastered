import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FillStar from '../assets/svg/fillStar.svg';
import EmptyStar from '../assets/svg/emptyStar.svg';

function setsStarAmount(concluded) {
  let filledStar = 0;
  let emptyStar = 3;

  if (concluded >= 10) {
    filledStar = 1;
    emptyStar = 2;
  }
  if (concluded >= 70) {
    filledStar = 2;
    emptyStar = 1;
  }

  if (concluded == 100) {
    filledStar = 3;
    emptyStar = 0;
  }

  return {
    filledStar: filledStar,
    emptyStar: emptyStar,
  };
}

const StatsStarComp = (props) => {
  const quantityStar = setsStarAmount(props.concluded);
  const {filledStar, emptyStar} = quantityStar;
  console.log(quantityStar);
  let viewStars = [];

  for (let index = 0; index < filledStar; index++) {
    viewStars.push(<FillStar />);
  }

  for (let index = 0; index < emptyStar; index++) {
    viewStars.push(<EmptyStar />);
  }

  return <View style={styles.content}>{viewStars}</View>;
};

export default StatsStarComp;


const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row'
    }
})