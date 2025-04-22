"use strict";
// Crie um enum chamado DiaSemana com os dias: SEGUNDA, TERÇA, QUARTA, QUINTA, SEXTA. Crie uma variável que recebe DiaSemana.QUARTA e imprima no console.
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["SEGUNDA"] = 0] = "SEGUNDA";
    DiaSemana[DiaSemana["TERCA"] = 1] = "TERCA";
    DiaSemana[DiaSemana["QUARTA"] = 2] = "QUARTA";
    DiaSemana[DiaSemana["QUINTA"] = 3] = "QUINTA";
    DiaSemana[DiaSemana["SEXTA"] = 4] = "SEXTA";
})(DiaSemana || (DiaSemana = {}));
;
const dia = DiaSemana.TERCA;
console.log(DiaSemana[dia]);
// interessante como o enum funciona parecido como um array. Se eu crio um enum como esse que criei e nao coloco nenhum valor, a saída normal para
// console.log(dia) => ele vai me retornar 1, porque ele faz como se fosse
// enum DiaSemana {
//     SEGUNDA,  => 0
//     TERCA,    => 1
//     QUARTA,   => 2
//     QUINTA,   => 3
//     SEXTA     => 4
// };
// atribui automaticamente. Se eu quiser acessar o proprio enum dessa forma console.log(DiaSemana[dia]);, aí ele me retorna o proprio nome, como TERCA e eu tambem
// posso atribuir valores para substituir esses numeros, mas isso eh bem parecido com o java
