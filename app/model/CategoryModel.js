const CategoryModel = {
  name: 'Categoria',
  primaryKey: 'idCategoria',
  properties: {
    idCategoria: 'int',
    descricao: 'string',
    letras: 'Letra[]',
    cor: 'Cor',
  },
};

export default CategoryModel;
