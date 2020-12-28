const LetterModel = {
  name: 'Letra',
  primaryKey: 'idLetra',
  properties: {
    idLetra: 'int',
    descricao: 'string',
    porcentagem: 'int',
    palavras: 'Palavra[]',
  },
};

export default LetterModel;
