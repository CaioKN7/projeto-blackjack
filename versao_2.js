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

   let iniciarJogo = confirm("Bem-vinde ao jogo de blackjack\nQuer iniciar uma nova rodada?")


if (iniciarJogo) {
   let primeiraCartaUsuario = comprarCarta();
   let segundaCartaUsuario = comprarCarta();
   let primeiraCartaMaquina = comprarCarta();
   let segundaCartaMaquina = comprarCarta();

   //console.log(primeiraCartaUsuario);
   let todasAsCartasUsuario = [primeiraCartaUsuario, segundaCartaUsuario]
   let somaUsuario = 0
   let todasAsCartasMaquina = [primeiraCartaMaquina, segundaCartaMaquina]
   let somaMaquina = 0


  let pontosUsuario = primeiraCartaUsuario.valor+segundaCartaUsuario.valor
  let pontosMaquina = primeiraCartaMaquina.valor+segundaCartaMaquina.valor
  
  if (pontosUsuario<21) {
   confirm(`Suas cartas são ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} e a carta revelada da máquina é ${primeiraCartaMaquina.texto}\nDeseja comprar mais uma carta? `)
   todasAsCartasUsuario.push(comprarCarta())
   for (let index = 0; index < todasAsCartasUsuario.length; index++) {
      somaUsuario+=todasAsCartasUsuario[index];
      console.log(todasAsCartasUsuario);
      
   }


} else{
   
}


 } else {
 alert("O jogo acabou");
}