// declarar as variaveis

//3 funções
let pacman;
let pacmanLeft, pacmanRight, pacmanUp, pacmanDown;
let Ghost1, Ghost2, Ghost3, Ghost4, Ghost5;
let objGhost10,objGhost9, objGhost8, objGhost7, objGhost6, objGhost5, objGhost4, objGhost3, objGhost2, objGhost1;
let wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;
let square;
let foods = []
let walls = []

function preload(){
    // Animações do Pacman
    pacmanRight = loadAnimation('./assets/pacman/pacman1.png', './assets/pacman/pacman2.png','./assets/pacman/pacman2.png');
    pacmanLeft = loadAnimation('./assets/pacman/pacman3.png', './assets/pacman/pacman4.png','./assets/pacman/pacman4.png');
    pacmanUp = loadAnimation('./assets/pacman/pacman7.png', './assets/pacman/pacman8.png','./assets/pacman/pacman8.png');
    pacmanDown = loadAnimation('./assets/pacman/pacman5.png', './assets/pacman/pacman6.png','./assets/pacman/pacman6.png');
    // Imagens dos Fantasmas
    Ghost1  = loadImage('./assets/fantasma/fantasmaAmarelo.png')
    Ghost2  = loadImage('./assets/fantasma/fantasmaVerde.png')
    Ghost3  = loadImage('./assets/fantasma/fantasmaAzul.png')
    Ghost4  = loadImage('./assets/fantasma/fantasmaRosa.png')
    Ghost5  = loadImage('./assets/fantasma/fantasmaVermelho.png')

}

function setup(){
    //CRIAÇÃO DO SPRITE DO PACMAN
    createCanvas(windowWidth, windowHeight);
    pacman = createSprite(windowWidth / 25,windowHeight / 6, 20, 50);
    pacman.addAnimation('changeDOWN', pacmanDown)
    pacman.addAnimation('changeLEFT', pacmanLeft)
    pacman.addAnimation('changeRIGHT', pacmanRight)
    pacman.addAnimation('changeUP', pacmanUp)
    
    pacman.scale = 0.5;

    //CRIAÇÃO DOS OBJETOS DAS CLASSE GHOST position X
    objGhost1 = new Ghost(0, 30, Ghost1, 10, 4);
    objGhost2 = new Ghost(0, windowHeight / 5 * 1.5, Ghost2, 10, -4);
    objGhost3 = new Ghost(0, windowHeight / 5 * 3, Ghost3, 10, 9);
    objGhost4 = new Ghost(0, windowHeight / 5 * 4.5, Ghost4, 15, -5);

    //CRIAÇÃO DOS OBJETOS DAS CLASSE GHOST position Y
    objGhost6 = new Ghost(windowWidth / 5, 30, Ghost1, 10, 4);
    objGhost7 = new Ghost(windowWidth / 5 * 2, 30, Ghost2, 10, -4);
    objGhost8 = new Ghost(windowWidth / 5 * 3, 30, Ghost3, 10, 9);
    objGhost9 = new Ghost(windowWidth / 5 * 4, 30, Ghost4, 15, -5);
    objGhost10 = new Ghost(windowWidth / 5 * 4.9, 30, Ghost5, 15, 7);

    // CRIAÇÃO DAS COMIDAS
    createFood()

    // CRIAÇÃO DAS PAREDES
    createWall()
}
function createWall(){
    let o = 0
    let p = 2.5
    for (i = 0; i < 3; i++){
        posY = windowHeight / 15 * p
        p += 5
        for(j = 0; j < 5; j++){
            o += 1
            posX = windowWidth / 10 * (o + j)
            let wall = new Wall(posX, posY)
            walls.push(wall)

        }
        o = 0
    }
    console.log(walls)
}



theDetermineterForTheCreationOfTheFoods = 0
function draw(){
    
    PacmansMovimatation()
    checkPacmansMovimatation()
    background(0)
    drawSprites()

    // MOVIMENTO DOS SPRITES NA POSIÇAO X
    objGhost1.colisation(pacman)
    objGhost1.moveX()
    objGhost2.moveX()
    objGhost2.colisation(pacman)
    objGhost3.moveX()
    objGhost3.colisation(pacman)
    objGhost4.moveX()
    objGhost4.colisation(pacman)

//     // MOVIMENTO DOS PERSONAGEMS NO POSIÇÃO Y

    objGhost6.moveY()
    objGhost6.colisation(pacman)
    objGhost7.moveY()
    objGhost7.colisation(pacman)
    objGhost8.moveY()
    objGhost8.colisation(pacman)
    objGhost9.moveY()
    objGhost9.colisation(pacman)
   objGhost10.moveY()
   objGhost10.colisation(pacman)

   // CRIAÇÃO DAS COMIDAS
    for (i = 0; i < foods.length; i++){
        foods[i].show()
    }
    for (i = 0; i < walls.length; i++){
        walls[i].colisation(pacman)
    }
}
    

// if (mouseIsPressed === true) {
//     background(0)
//   } else {
//     background(255,255,255)
//   }

function PacmansMovimatation(){
    if(keyIsDown(LEFT_ARROW)){
        pacman.position.x = pacman.position.x - 5
        pacman.changeAnimation('changeLEFT')
    }
    if(keyIsDown(RIGHT_ARROW)){
        pacman.position.x = pacman.position.x + 5
        pacman.changeAnimation('changeRIGHT')
    }
    if(keyIsDown(UP_ARROW)){
        pacman.position.y = pacman.position.y - 5
        pacman.changeAnimation('changeUP')
    }
    if(keyIsDown(DOWN_ARROW)){
        pacman.position.y = pacman.position.y + 5
        pacman.changeAnimation('changeDOWN')
    }
}
function checkPacmansMovimatation(){
    if (pacman.position.x > windowWidth){
        pacman.position.x = 0
    }
    if (pacman.position.x < 0){
        pacman.position.x = windowWidth
    }
    if (pacman.position.y > windowHeight){
        pacman.position.y = 0
    }
    if (pacman.position.y < 0){
        pacman.position.y = windowHeight
    }
}


function createFood(){
    let foodsRow = 4;
    let foodForRow  = 50;
    let verticalSpace = windowHeight / 4
    let o = 0
    for (let i = 0; i < foodsRow; i++){
        let posY = verticalSpace * i + (o += 45)
        for (j = 0; j < foodForRow; j++){
            let posX = width / foodForRow * j
            let food = new PacmanFood(posX, posY)
            foods.push(food)
        }
    }
}
console.log(foods)



function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}
