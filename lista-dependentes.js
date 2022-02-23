const cliente = {
    nome :"gregorio",
    idade :35,
    cpf : "1239943292",
    email:"grehgcl@hotmaill.com",
    fones:["5598769037", "55869348739"],
    dependentes: [{
        nome: "sara",
        parentesco: "filha",
        dataNasc:"20/03/2011"
    }]
    

}

cliente.dependentes.push({
    nome:"samia maria", 
    parentesco:" filha", 
    dataNasc:"04/01/2014"
})

console.log(cliente)