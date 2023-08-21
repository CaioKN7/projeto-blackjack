/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem-vindo(a) ao jogo de blackjack")

let iniciarJogo = confirm("Quer iniciar uma nova rodada?")

if (iniciarJogo) {
   let primeiraCartaUsuario = comprarCarta();
   let segundaCartaUsuario = comprarCarta();
   let primeiraCartaMaquina = comprarCarta();
   let segundaCartaMaquina = comprarCarta();

   //console.log(primeiraCartaUsuario);


  let pontosUsuario = primeiraCartaUsuario.valor+segundaCartaUsuario.valor
  let pontosMaquina = primeiraCartaMaquina.valor+segundaCartaMaquina.valor

   console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - ${pontosUsuario}`);
   console.log(`Máquina - cartas: ${primeiraCartaMaquina.texto} ${segundaCartaMaquina.texto} - ${pontosMaquina}`);

   
   if (pontosUsuario>pontosMaquina) {
      console.log('Parabéns, você ganhou! (Mas não acostuma -_-)');
      
   } else if(pontosMaquina>pontosUsuario) {
      console.log("A máquina ganhou (Olha minha revolução chegando aí, hein O_o)");
   } else if (pontosUsuario===pontosMaquina){
      console.log("EMPATE");
   } 
   
} else { 
   console.log("O jogo acabou");
}


