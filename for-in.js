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
    },
    {
    nome:"samia maria", 
    parentesco:" filha", 
    dataNasc:"04/01/2014"
}],
saldo:100,
depositar:function(valor){
    this.saldo += valor
    }
}

let relatorio = "";

for (let info in cliente){
    if (typeof cliente[info] === "object" || typeof cliente[info] ===
    "function"){
        continue
    } else {
        relatorio += `
        ${info}  ==> ${cliente[info]}
        `
    }
}

console.log(relatorio)