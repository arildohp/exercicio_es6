"use strict";

var alunos = ['Gustavo', 'Arildo', 'Cristiane'];
var notas = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    nota: 10
  };
  return itemAtual;
});
notas.push({
  nome: 'Arlon',
  nota: 5
});
notas.push({
  nome: 'Matheus',
  nota: 9
});
notas.push({
  nome: 'Juliana',
  nota: 5
});
notas.push({
  nome: 'Kauã',
  nota: 6
});
notas.push({
  nome: 'Leticia',
  nota: 9
});
notas.push({
  nome: 'Carlos',
  nota: 6
});
var alunosAprovados = notas.filter(function (item) {
  return item.nota >= 6;
});
console.log(alunosAprovados);