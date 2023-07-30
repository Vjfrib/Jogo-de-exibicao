
function serverDaMaria () {
  console.log("Gott mit uns");
  //testar o setup
  console.log("puxar um express daqui? um arch qe chame um express em outro arch?");
  //process.
  
  const rls = require("readline-sync");
  // da lib, vou qerer que rls receba os atributos do famoso readline-sync
  
  const xpss = require("express");
  // da lib express, vou querer que xpss receba os atributos do doc / objeto chamado "express"
  const app = xpss();
  //ele habilita o coisa "app" usar metodos de "xpss" que adiquiriu as paradas da lib / modulo "express?"
  
  // const app = xps();, está executando a função xps e armazenando o seu retorno na variável app. 
  /*
  no Javascript, vc chama uma uma lib fazendo:
  1. declarando uma E.D (como as variável var) __constante__
  2. Depois faz essa cte const receber a lib por meio da require(" ");
  
  */
  
  var senha = rls.question("digit");  //cria a var e faz ela receber 
  senha = parseInt(senha);            //transforma ela de "qualquer tipo" para "Integer"
  console.log(senha)                  //exibe
  
  if (senha === 777){
                                                                                //permite que, qndo um get, para o 
    app.get('/',    (req, res) => {res.send('Saiu!') }    );                    //endereço "/". ele response com o tipo "send"
                                                                                //(enviando) a stirng 'Saiu!'
    app.get('/home',    (req, res) => {res.send('Saiu!') }    );                    //
    
    app.listen(    3000, () => { console.log('escondidinho: pegou!'); }    );   // fica escuando a movimentação na porta 3000
    app.listen(    3001, () => { console.log('pegou na portinha de trás, '); }    );   //na porta 3001...
  }
  else {
    console.log("\t\t\n\nErooou")
    //process.
    process.exit(0)
  }
  
}