const cliente = {
    nome :"gregorio",
    idade :35,
    cpf : "1239943292",
    email:"grehgcl@hotmaill.com",
    fones:["5598769037", "55869348739"],
    

}

cliente.dependentes = {
    nome: "sara",
    parentesco: "filha",
    dataNasc:"20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "sara silva"

console.log(cliente)