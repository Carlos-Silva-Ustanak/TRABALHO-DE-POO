"use strict";
let funcionarios = [
    { nome: "CARLOS", cargo: "estagiario" },
    { nome: "JULHO", cargo: "dev senior" }
];
console.log(funcionarios);
console.log(funcionarios[1]);
function listarFuncioanrios(nome, cargo) {
    let funcionarioObj = {
        nome, cargo
    };
    funcionarios.push(funcionarioObj);
}
function editarDados(campoFuncio, nome, cargo) {
    let chave = funcionarios.findIndex(e => e.nome === campoFuncio);
    let editFuncio = { nome, cargo };
    funcionarios[chave] = editFuncio;
}
function deletFuncio(nome) {
    let chave = funcionarios.findIndex(e => e.nome === nome);
    funcionarios.splice(chave, 1);
}
