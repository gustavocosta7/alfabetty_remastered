import React from 'react';
import Swiper from 'react-native-swiper';
import ButtonLetterComp from './ButtonLetterComp';

const ActivitySliderComp = (props) => {
  const {words} = props;
  let buttonWords = [];
  words.map((word, index) => {
    buttonWords.push(<ButtonLetterComp key={index} letter={word} />);
  });
  return (
    <Swiper showButtons height={220}>
      {buttonWords}
    </Swiper>
  );
};

export default ActivitySliderComp;
