const cliente = {
    nome :"gregorio",
    idade :35,
    cpf : "1239943292",
    email:"grehgcl@hotmaill.com"
}

const chaves = ["nome", "idade", "cpf",
"email"]

chaves.forEach(info => console.log
    (cliente[info])
);