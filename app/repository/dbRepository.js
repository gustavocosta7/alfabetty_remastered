import Realm from 'realm';
import CategoryModel from '../model/CategoryModel';
import ColorModel from '../model/ColorModel';
import LetterModel from '../model/LetterModel';
import WordModel from '../model/WordModel';

class DbRepository {
  static getRealm() {
    return Realm.open({
      path: 'alfabetty',
    });
  }
  static setup() {
    const realm = new Realm({
      schema: [CategoryModel, ColorModel, LetterModel, WordModel],
      path: 'alfabetty',
      // inMemory: true,
    });
    const colors = realm.objects('Cor');

    if (colors.length === 0) {
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
          alias: 'airplane',
        });

        const abelha = realm.create('Palavra', {
          idPalavra: 2,
          descricao: 'abelha',
          alias: 'bee',
        });

        const abacaxi = realm.create('Palavra', {
          idPalavra: 3,
          descricao: 'abacaxi',
          alias: 'pineapple',
        });

        const elefante = realm.create('Palavra', {
          idPalavra: 4,
          descricao: 'elefante',
          alias: 'elephant',
        });
        const indio = realm.create('Palavra', {
          idPalavra: 5,
          descricao: 'índio',
          alias: 'native',
        });
        const ovo = realm.create('Palavra', {
          idPalavra: 6,
          descricao: 'ovo',
          alias: 'egg',
        });
        const uva = realm.create('Palavra', {
          idPalavra: 7,
          descricao: 'uva',
          alias: 'grape',
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
          descricao: 'e',
          porcentagem: 0,
          palavras: [elefante],
        });

        const i = realm.create('Letra', {
          idLetra: 3,
          descricao: 'i',
          porcentagem: 0,
          palavras: [indio],
        });

        const o = realm.create('Letra', {
          idLetra: 4,
          descricao: 'o',
          porcentagem: 0,
          palavras: [ovo],
        });

        const u = realm.create('Letra', {
          idLetra: 5,
          descricao: 'u',
          porcentagem: 0,
          palavras: [uva],
        });

        //application categories
        realm.create('Categoria', {
          idCategoria: 1,
          descricao: 'vogais',
          letras: [a, e, i, o, u],
          cor: blueColor,
        });
      });
    }

    realm.close();
  }
  static async getCategories() {
    const realm = await this.getRealm();
    return realm.objects('Categoria');
  }
}

export default DbRepository;
