class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async pegaTodos(req, res) {
        try {
            const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros(); 
            return res.status(200).json(listaDeRegistro);
        } catch (erro) {
            return res.status(400);
        }
    }

    async atualiza(req, res) {
        const { id } = req.params;
        const dadosAtualizado = req.body;
        try {
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizado, Number(id));
            if (!foiAtualizado) {
                return res.status(400).json({ message: 'Não foi possível atualizar o registro' });
            }
            return res.status(200).json({ message: 'Registro atualizado com sucesso' });
        } catch(erro) {

        }
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const ListaDeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
            where: { id: id }
        });

        if(ListaDeRegistrosAtualizados[0] === 0) {
            return false;
        } else {
            return true;
        }
    }
}

module.exports = Controller;