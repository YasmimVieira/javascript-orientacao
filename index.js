class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 3334445509;

const contaCorrenteRicardo = new ContaCorrente();

console.log(cliente1);
console.log( cliente2);

