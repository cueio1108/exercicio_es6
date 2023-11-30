"use strict";

var alunos = [{
  aluno: 'Lucas',
  nota: 3
}, {
  aluno: 'Saraiva',
  nota: 9.0
}, {
  aluno: 'Pedro',
  nota: 6
}, {
  aluno: 'Julia',
  nota: 10.0
}, {
  aluno: 'Leandro',
  nota: 9.9
}, {
  aluno: 'John',
  nota: 5.5
}];
function alunosAprovados(arr) {
  var aprovados = arr.filter(function (obj) {
    return obj.nota >= 6;
  });
  return aprovados.map(function (obj) {
    return obj.aluno;
  });
}
console.log(alunosAprovados(alunos));