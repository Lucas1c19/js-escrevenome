// Dimenções da tela.

let xtela = 400
let ytela = 400

let xbola = 20
let ybola = 20
let diametrobola = 25
let raiobola = diametrobola/2

let xvelocidade = 9
let yvelocidade = 6

// raquete HUM

let xretangulo1 = 10
let yretangulo1 = 150
let comprimento1 = 10
let altura1 = 100

//raquete DOIX
let xretangulo2 = 380
let yretangulo2 = 150
let comprimento2 = 10
let altura2 = 100

 let pontos1 = 0
 let pontos2 = 0

function setup() {
  createCanvas(xtela, ytela);
}

function draw() {
  background(0);
  circle(xbola,ybola,diametrobola)
  xbola = xbola + xvelocidade
  ybola = ybola + yvelocidade



if (xbola + raiobola > ytela || xbola - raiobola < 0) {
  xvelocidade = xvelocidade * (-1);
}


if(ybola + raiobola > ytela || ybola - raiobola < 0) {
  yvelocidade = yvelocidade * (-1);
}


rect(xretangulo1, yretangulo1, comprimento1, altura1)


if(keyIsDown(DOWN_ARROW)) {
  yretangulo1 = yretangulo1 + 6
}


  if(keyIsDown(UP_ARROW)) {
  yretangulo1 = yretangulo1 - 6

}
  
  //tapa na raquete1
  if (xretangulo1 + comprimento1 > xbola - raiobola
      && ybola + raiobola > yretangulo1
      && ybola - raiobola < yretangulo1 + altura1) { 
    xvelocidade = xvelocidade * (-1)
  }
  
  //comanduzera da raquetera
  rect(xretangulo2, yretangulo2, comprimento2, altura2)
  
  if(keyIsDown(LEFT_ARROW)) {
  yretangulo2 = yretangulo2 + 6
}


  if(keyIsDown(RIGHT_ARROW)) {
  yretangulo2 = yretangulo2 - 6

}
  //tapa na requete2
    if (xbola + raiobola > xretangulo2
      && ybola + raiobola > yretangulo2
      && ybola - raiobola < yretangulo2 + altura2) { 
    xvelocidade = xvelocidade * (-1)
 }
  
 fill(color(255,0,0))
 rect(90,15,28,20)

  
 fill(255)
 text(pontos1, 100, 30)

 fill(255)
 text(pontos2, 300, 30)
  

  
  if (xbola +raiobola > xtela) {
    pontos1 = pontos1 + 1
  }
  if (xbola - raiobola < 0) {
    pontos2 = pontos2 + 1
  }
}
