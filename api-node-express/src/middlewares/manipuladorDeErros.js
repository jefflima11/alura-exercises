import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros (erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
      res.status(400).send({message: "Um ou mais dados fornecidos são inválidos"});
    } else {
      res.status(500).send({message: `Erro interno no servidor - ${erro.message}`});
    }
}

export default manipuladorDeErros;