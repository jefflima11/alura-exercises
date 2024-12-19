const pessoa = {
    nome: string,
    idade: number,
    solteiro: boolean,
    hobbies: string
} = {
    nome: "Jefferson",
    idade: 24,
    solteiro: true,
    hobbies: ["Jogar", "Pedalar", "volei", "Basket", "Ler",],
    endereco: {
        rua: string,
        cidade: string,
        estado: string
    } = {
        rua: "Santa Rita",
        cidade: "Imperatriz",
        estado: "Maranhão",
    }
}

function mostrarInfoPessoa(pessoa) {
    console.log(`Tipo de campo ${typeof pessoa.nome}, nome: ${pessoa.nome}\n` + `Tipo de campo ${typeof pessoa.idade}, idade: ${pessoa.idade}\n`+`Tipo de campo ${typeof pessoa.hobbies}, hobbies: ${pessoa.hobbies}`);

    console.log(`Tipo de campo ${typeof pessoa.endereco.rua}, rua: ${pessoa.endereco.rua}\n`+`Tipo de campo: ${typeof pessoa.endereco.cidade}, cidade: ${pessoa.endereco.cidade}\n`+`Tipo de campo ${typeof pessoa.endereco.estado}, estado: ${pessoa.endereco.estado}`)
}

mostrarInfoPessoa(pessoa);