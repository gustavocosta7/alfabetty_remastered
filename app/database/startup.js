import Realm from 'realm';
import CategoryModel from '../model/CategoryModel';
import ColorModel from '../model/ColorModel';
import LetterModel from '../model/LetterModel';
import WordModel from '../model/WordModel';

const Startup = () => {
  const realm = new Realm({
    schema: [CategoryModel, ColorModel, LetterModel, WordModel],
    inMemory: true,
  });

  realm.write(() => {
    //Cards Colors
    const blueColor = realm.create('Cor', {
      idCor: 1,
      hex: '#1ab7ea',
    });
    const greenColor = realm.create('Cor', {
      idCor: 2,
      hex: '#2ECC40',
    });
    const yellowColor = realm.create('Cor', {
      idCor: 3,
      hex: '#FFDC00',
    });
    const orangeColor = realm.create('Cor', {
      idCor: 4,
      hex: '#FF851B',
    });
    const pinkColor = realm.create('Cor', {
      idCor: 5,
      hex: '#F012BE',
    });

    //application words
    const aviao = realm.create('Palavra', {
      idPalavra: 1,
      descricao: 'avião',
      imagem: '',
      ilustracao: '',
    });

    const abelha = realm.create('Palavra', {
      idPalavra: 2,
      descricao: 'abelha',
      imagem: '',
      ilustracao: '',
    });

    const abacaxi = realm.create('Palavra', {
      idPalavra: 3,
      descricao: 'abacaxi',
      imagem: '',
      ilustracao: '',
    });

    //application letters
    const a = realm.create('Letra', {
      idLetra: 1,
      descricao: 'a',
      porcentagem: 0,
      palavras: [aviao, abelha, abacaxi],
    });

    const e = realm.create('Letra', {
      idLetra: 2,
      descricao: 'a',
      porcentagem: 0,
      palavras: [],
    });

    const i = realm.create('Letra', {
      idLetra: 3,
      descricao: 'a',
      porcentagem: 0,
      palavras: [aviao, abelha, abacaxi],
    });

    const o = realm.create('Letra', {
      idLetra: 4,
      descricao: 'a',
      porcentagem: 0,
      palavras: [],
    });

    const u = realm.create('Letra', {
      idLetra: 5,
      descricao: 'a',
      porcentagem: 0,
      palavras: [],
    });

    //application categories
    realm.create('Categoria', {
      idCategoria: 1,
      descricao: 'vogais',
      letras: [a, e, i, o, u],
      cor: blueColor,
    });
  });
};

export default Startup;
