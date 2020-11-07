import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { Conta } from './Conta.js';

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 3334445509);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(cliente2, 102);

let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaCorrente = new ContaCorrente(400, cliente1, 1001);

const conta = new Conta(0, cliente1, 1001);