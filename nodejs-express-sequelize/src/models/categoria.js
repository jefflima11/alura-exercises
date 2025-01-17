'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
   
    static associate(models) {
      Curso.belongsTo(models.Categoria, {
        foreignKey: 'categoria_id'
      });
      Curso.belongsTo(models.Pessoa, {
        foreignKey: 'docente_id'
      });
      Curso.hasMany(models.Matricula, {
        foreignKey: 'curso_id'
      });
    }
  }
  Categoria.init({
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categorias',
  });
  return Categoria;
};