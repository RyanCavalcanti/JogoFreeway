//Ator
let xAtor = 85;
let yAtor = 370;

let colisao = false;

let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function podeSeMover(){
  return yAtor < 370;  
}


function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao) {
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcarPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
    somDoPonto.play();
  }
}








