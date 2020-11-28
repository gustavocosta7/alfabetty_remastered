import React from 'react';
import Alligator from '../svg/words/alligator-svg';
import Aviao from '../svg/words/aviao-svg';
import Elefante from '../svg/words/elefante-svg';
import Indio from '../svg/words/indio-svg';
import Lapis from '../svg/words/lapis-svg';
import Lion from '../svg/words/lion-svg';
import Monkey from '../svg/words/monkey-svg';
import Ovo from '../svg/words/ovo-svg';
import Uva from '../svg/words/uva-svg';
import COLORS from './colors';

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
              drawing: <Aviao width={150} />,
              color: COLORS['0'],
            },
          ],
          concluded: 0,
        },
        {
          id: '2',
          letter: 'e',
          words: [
            {
              word: 'elefante',
              image: '',
              drawing: <Elefante width={150} />,
              color: COLORS['1'],
            },
          ],
          concluded: 10,
        },
        {
          id: '3',
          letter: 'i',
          words: [
            {
              word: 'indio',
              image: '',
              drawing: <Indio width={150} />,
              color: COLORS['2'],
            },
          ],
          concluded: 40,
        },
        {
          id: '4',
          letter: 'o',
          words: [
            {
              word: 'ovo',
              image: '',
              drawing: <Ovo width={150} />,
              color: COLORS['3'],
            },
          ],
          concluded: 70,
        },
        {
          id: '4',
          letter: 'u',
          words: [
            {
              word: 'uva',
              image: '',
              drawing: <Uva width={150} />,
              color: COLORS['4'],
            },
          ],
          concluded: 70,
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
              drawing: <Lion width={150} />,
              color: COLORS['0'],
            },
          ],
          concluded: 0,
        },
        {
          id: 7,
          letter: 'j',
          words: [
            {
              word: 'jacaré',
              image: '',
              drawing: <Alligator width={150} />,
              color: COLORS['1'],
            },
          ],
          concluded: 0,
        },
        {
          id: 8,
          letter: 'l',
          words: [
            {
              word: 'lápis',
              image: '',
              drawing: <Lapis width={150} />,
              color: COLORS['2'],
            },
          ],
          concluded: 0,
        },
        {
          id: 9,
          letter: 'm',
          words: [
            {
              word: 'macaco',
              image: '',
              drawing: <Monkey width={150} />,
              color: COLORS['3'],
            },
          ],
          concluded: 0,
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
              drawing: <Lion width={150} />,
              color: COLORS['0'],
            },
          ],
          concluded: 0,
        },
        {
          id: 7,
          letter: 'j',
          words: [
            {
              word: 'jacaré',
              image: '',
              drawing: <Alligator width={150} />,
              color: COLORS['1'],
            },
          ],
          concluded: 0,
        },
        {
          id: 8,
          letter: 'l',
          words: [
            {
              word: 'lápis',
              image: '',
              drawing: <Lapis width={150} />,
              color: COLORS['2'],
            },
          ],
          concluded: 0,
        },
        {
          id: 9,
          letter: 'm',
          words: [
            {
              word: 'macaco',
              image: '',
              drawing: <Monkey width={150} />,
              color: COLORS['3'],
            },
          ],
          concluded: 0,
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
              drawing: <Lion width={150} />,
              color: COLORS['0'],
            },
          ],
          concluded: 0,
        },
        {
          id: 7,
          letter: 'j',
          words: [
            {
              word: 'jacaré',
              image: '',
              drawing: <Alligator width={150} />,
              color: COLORS['1'],
            },
          ],
          concluded: 0,
        },
        {
          id: 8,
          letter: 'l',
          words: [
            {
              word: 'lápis',
              image: '',
              drawing: <Lapis width={150} />,
              color: COLORS['2'],
            },
          ],
          concluded: 0,
        },
        {
          id: 9,
          letter: 'm',
          words: [
            {
              word: 'macaco',
              image: '',
              drawing: <Monkey width={150} />,
              color: COLORS['3'],
            },
          ],
          concluded: 0,
        },
      ],
    },
  ],
};

export default DATA;
