//Exibindo mensagem de boas vindas
alert('Olá! Bem-vinda ao Show do Milhão!')
//Salvando nome do usuário
var player = prompt('Qual seu nome?')
//Boas-vindas
document.getElementById("nome").innerHTML = `Olá, ${player}!`
//Salvando resposta usuário
var respostaDoPlayer = prompt('Quer iniciar o jogo?\n Se Sim, digite: 1 \n Se Não, digite: 2')
// implementando a decisão do player com If/else e criando perguntas.
  if (respostaDoPlayer === "1")
  { var pergunta1 = prompt('Quanto é 4x6? \n 20 \n 24 \n 32 ')
  var pergunta2 = prompt('Qual a bebida preferida da Mariana Costa, fundadora da Laboratoria? \n Pisco \n Cerveja \n Vinho')
  var pergunta3 = prompt('Quantas "estações" temos durante o Verão de São Paulo? \n 1 \n 2 \n Todas') 

  } 
  else{alert(`Entendemos que você não quer jogar ${player} :(` )}
  // Comparando as respostas
  var resposta1 = '24'
  var resposta2 = 'Pisco'
  var resposta2a = 'pisco'
  var resposta3 = 'Todas'
  var resposta3a = 'todas'
  //Pergunta1
  var boxEsquerda = document.getElementById('respCorretas')
  if( pergunta1===resposta1) {
      document.getElementById('respUm').innerHTML='Resposta 1'
  } else {document.getElementById('respUmE').innerHTML='Resposta 1'}
//Pergunta2
if( pergunta2===resposta2 || pergunta2===resposta2a) {
    document.getElementById('respDois').innerHTML='Resposta 2'
} else {document.getElementById('respDoisE').innerHTML='Resposta 2'}
//Pergunta3
if( pergunta3===resposta3 || pergunta3===resposta3a) {
    document.getElementById('respTres').innerHTML='Resposta 3'
} else {document.getElementById('respTresE').innerHTML='Resposta 3'}
                        