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
