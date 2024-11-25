function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
}

function montaSaidaArquivo(ListaPalavras) {
    let textoFinal = '';
    ListaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');
        textoFinal += `palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas} \n`;
    })

    return textoFinal;
}

export { montaSaidaArquivo }