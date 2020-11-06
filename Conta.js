export class Conta {
    constructor(tipo, saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        this._tipo = tipo;
    }

    sacar(valor) {
        let taxa = 1
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}