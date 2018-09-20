/* Exercicio 1  */

/*var endereco = {
  rua: 'Rua dos pinheiros',
  numero: 1293,
  bairro: 'Centro',
  cidade: 'São Paulo',
  uf: 'SP'
};

function mostraAlgo(endereco) {
  return "O usuário mora em " + endereco.cidade + " / "+ endereco.uf + ", no bairro " + endereco.bairro + ", na rua \"" + endereco.rua + "\" com o n° " + endereco.numero  
}

console.log(mostraAlgo(endereco));*/

/* Exercicio 2 */

/*function pares(x, y) {
  for(var i = x; i <= y; i++){
    if(i % 2 == 0)
      console.log(i);
  }
}

pares(32, 321)*/

/* Exercicio 3 */
/*var skills = ['Javascript', 'ReactJS', 'React Native'];

function temHabilidade(skills) {
  return skills.indexOf('Javascript') != -1;
}

console.log(temHabilidade(skills));*/

/* Exercicio 4 */

/*function experiencia(anos) {
  if(anos > 7)
    return "Jedi Master";
  else if(anos > 3)
    return "Avançado";
  else if(anos > 1)
    return "Intermediario";
  else
    return "Iniciante";
}

var anosEstudos = 3 ;
console.log(experiencia(anosEstudos));*/

/* Exercicio 5 */

/*var usuarios = [
  {
    nome: 'Diego',
    habilidades: ['Javascript', 'ReactJS', 'Redux']
  },
  {
    nome: 'Gabriel',
    habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
  }
];

function mostraAlgo(array) {
  for (var item of array) {
    console.log("O " + item.nome + " possui as habilidades: " + item.habilidades.join(', '));
  }
}

mostraAlgo(usuarios);*/

/* Challange Master */

function countdown(minutos) {

  var agora  = new Date;
  var futuro = new Date(2018, 0, 0, agora.getHours(), (agora.getMinutes() + minutos), agora.getSeconds(), 0);

  function show() {
    var count = new Date;
    var horas = futuro.getHours() - count.getHours();
    var minutos = futuro.getMinutes() - count.getMinutes();
    var segundos = futuro.getSeconds() - count.getSeconds();
    var show = new Date(2018, 0, 0, horas, minutos, segundos, 0);
    var mostra = `"${show.getHours()}:${show.getMinutes()}:${show.getSeconds()}"`;
    if(segundos == 55){
      return 0;
    }  else {
      console.log(mostra);
    }
  }
  setInterval(show, 1000);
  return 0;

}

countdown(1)
