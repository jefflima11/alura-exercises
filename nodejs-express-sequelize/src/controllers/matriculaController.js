const Controller = require('./Controller.js');
const MatriculaServices = require('../services/CursoServices.js');

const matriculaServices = new MatriculaServices();

class CursoController extends Controller{
  constructor() {
    super(matriculaServices);
  }

}

module.exports = MatriculaController;