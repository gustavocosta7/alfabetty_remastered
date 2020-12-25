import React from 'react';
import {StyleSheet, View} from 'react-native';
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
  let viewStars = [];
  let indexStar = 0;

  for (let index = 0; index < filledStar; index++) {
    indexStar++;
    viewStars.push(<FillStar key={indexStar} />);
  }

  for (let index = 0; index < emptyStar; index++) {
    indexStar++;
    viewStars.push(<EmptyStar key={indexStar} />);
  }

  return <View style={styles.content}>{viewStars}</View>;
};

export default StatsStarComp;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});
