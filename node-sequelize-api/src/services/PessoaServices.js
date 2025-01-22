const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
  }

  async pegaMatriculasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }

  async pegaPessoasEscopoTodos () {
    const listaPessoas = await super.pegaTodosOsRegistrosAtivos('todosOsRegistros');
    return listaPessoas;
  }
}

module.exports = PessoaServices;
