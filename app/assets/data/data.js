import React from 'react';

import Aviao from '../svg/travelling.svg';
import Elefante from '../svg/words/elephant.svg';
import Indio from '../svg/words/native.svg';
import Ovo from '../svg/words/egg.svg';
import Uva from '../svg/words/grapes.svg';
import Leao from '../svg/words/lion.svg';
import Jacare from '../svg/words/crocodilo.svg';
import Lapis from '../svg/words/lapis.svg';
import Macaco from '../svg/words/macaco.svg';

const DATA = {
  classification: [
    {
      category: 'vogais',
      letters: [
        {
          id: '1',
          letter: 'a',
          words: [
            {
              word: 'avião',
              image: '',
              drawing: <Aviao />,
            },
          ],
          concluded: 0
        },
        {
          id: '2',
          letter: 'e',
          words: [
            {
              word: 'elefante',
              image: '',
              drawing: Elefante,
            },
          ],
          concluded: 10
        },
        {
          id: '3',
          letter: 'i',
          words: [
            {
              word: 'indio',
              image: '',
              drawing: Indio,
            },
          ],
          concluded: 40
        },
        {
          id: '4',
          letter: 'o',
          words: [
            {
              word: 'ovo',
              image: '',
              drawing: Ovo,
            },
          ],
          concluded: 70
        },
        {
          id: '5',
          letter: 'u',
          words: [
            {
              word: 'uva',
              image: '',
              drawing: Uva,
            },
          ],
          concluded: 100
        },
      ],
    },
    {
      category: 'ÃO,J,L,M',
      letters: [
        {
          id: 6,
          letter: 'ão',
          words: [
            {
              word: 'leão',
              image: '',
              drawing: Leao,
            },
          ],
          concluded: 0
        },
        {
          id: 7,
          letter: 'j',
          words: [
            {
              word: 'jacaré',
              image: '',
              drawing: Jacare,
            },
          ],
          concluded: 0
        },
        {
          id: 8,
          letter: 'l',
          words: [
            {
              word: 'lápis',
              image: '',
              drawing: Lapis,
            },
          ],
          concluded: 0
        },
        {
          id: 9,
          letter: 'm',
          words: [
            {
              word: 'macaco',
              image: '',
              drawing: Macaco,
            },
          ],
          concluded: 0
        },
      ],
    },
  ],
};

export default DATA;
