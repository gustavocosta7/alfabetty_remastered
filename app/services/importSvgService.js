import React from 'react';
import PineappleSvg from '../assets/svg/words/pineapple-svg';
import Airplane from '../assets/svg/words/aviao-svg';
import Elephant from '../assets/svg/words/elefante-svg';
import Native from '../assets/svg/words/indio-svg';
import Egg from '../assets/svg/words/ovo-svg';
import Grape from '../assets/svg/words/uva-svg';
import Bee from '../assets/svg/words/abelha-svg';

export default function getSvg(key) {
  switch (key) {
    case 'pineapple':
      return <PineappleSvg width={150} />;
    case 'airplane':
      return <Airplane width={125} />;
    case 'bee':
      return <Bee width={125} />;
    case 'elephant':
      return <Elephant width={150} />;
    case 'native':
      return <Native width={150} />;
    case 'egg':
      return <Egg width={150} />;
    case 'grape':
      return <Grape width={150} />;
  }
}
