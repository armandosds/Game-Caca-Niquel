const body = document.getElementsByTagName('body');
const botao = document.getElementById('button');
const h3 = document.getElementById('h3');

let contador = 0;
botao.addEventListener('click', function() {
  contador++;
  h3.innerText = contador;
});

let Directory = "./img/";
//Definir variáveis para indicar o caminho para a pasta inclui imagens.
let list = [];
//lista let indica o caminho completo para as imagens, incluindo seu nome de arquivo.
for(let i=0 ; i < 10; i++) {
  list[i] = Directory + i + ".png";
//let list = "diretório para pasta" + "um dos números (i)" + "extensão (png)".
  new  Image().src = list[i];
//Crie uma imagem de qual src é a lista [i].
}
let counter = 0;

const slot = () => {
  let Random = setInterval(function(){
// Comece a gerar números aleatórios. Neste caso, o processo de geração é exibido antes que o número seja decidido.
    counter++;
//Contador para contar o processo de geração de tempos.
    let left = Math.floor(Math.random() * 10);
    let center = Math.floor(Math.random() * 10);
    let right = Math.floor(Math.random() * 10);
// O número é gerado em casas decimais de forma que o número deve ser multiplicado por 10. Em seguida, o número será arredondado para um inteiro por "piso".
    document.left.src = list[left];
    document.center.src = list[center];
    document.right.src = list[right];

//Mostrar os números durante o processo de geração de números.
    if (counter > 5){
      let final_left = list[left];
      let final_center = list[center];
      let final_right = list[right];
// Mostrar cinco números durante o processo de geração em 10 mm / s.

      if ((final_left == final_center) || (final_left == final_right) || (final_center == final_right) ) {
        document.getElementById("all").innerHTML = "Você ganhou o segundo prêmio!";
//Neste caso, se dois de três números corresponderem, o usuário receberá o segundo prêmio.

      } else if ((final_left == final_center) && (final_left == final_right) && (final_center == final_right)) {
        document.getElementById("all").innerHTML = "Você ganhou o primeiro prêmio!";

//Quando todos os três números coincidirem, o usuário receberá o primeiro prêmio.

      } else  {
        document.getElementById("all").innerHTML = "Você Perdeu. Tente Novamente!";
//Quando nenhum dos três números corresponder, o usuário falhará.
      }

      counter = 0;
      clearInterval(Random);
// Depois que o resultado for exibido, o processo de geração de números aleatórios deve ser fechado.

    }
  }, 100);   //Fim da função setInterval
}   //Fim da função setInterval
