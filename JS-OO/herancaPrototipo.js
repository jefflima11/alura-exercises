const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2024-01-01",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    },
    exibirTeste: function () {
        console.log('apenas um teste de heranca');
    }
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    nascimento: "2024-01-01",
    role: "admin",
    ativo: true,
    criarCurso: function () {
        console.log('curso criado');
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
admin.exibirTeste();

Array.prototype;