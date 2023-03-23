interface funcionario {

    nome: string;
    cargo: string;

}

let funcionarios: Array<funcionario> = [

    { nome: "CARLOS", cargo: "estagiario" },
    { nome: "JULHO", cargo: "dev senior" }

];

console.log(funcionarios);
console.log(funcionarios[1]);

function listarFuncioanrios(nome: string, cargo: string) {

    let funcionarioObj: funcionario = {

        nome, cargo

    }

    funcionarios.push(funcionarioObj);

}

function editarDados(campoFuncio: string, nome: string, cargo: string) {

    let chave = funcionarios.findIndex(e => e.nome === campoFuncio);

    let editFuncio: funcionario = { nome, cargo };

    funcionarios[chave] = editFuncio;

}

function deletFuncio(nome: string) {

    let chave = funcionarios.findIndex(e => e.nome === nome);
    funcionarios.splice(chave, 1);

}