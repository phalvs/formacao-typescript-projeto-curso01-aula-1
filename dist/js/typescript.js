let valor = 3000;
let nome = "";
let isPago = false;
let qualquer = "";
qualquer = 22;
//Arrays
const lista = [];
lista.push(13, 22.5, 22, 89, 1.58);
//Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Deposito";
    TipoTransacao["TRANFERENCIA"] = "Transferencia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0
};