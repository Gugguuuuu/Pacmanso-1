class Ghost{
    constructor(x, y, imagem, tamanho, velocidade){ 
        this.sprite = createSprite(x,y); // CRIA A SPRITE DA CLASSE
        this.sprite.addImage(imagem); // ADICIONA UMA IMAGEM A SPRITE
        this.sprite.scale = tamanho / 100; // ADICIONA A ESCALA
        this.sprite.velocidade = velocidade; // FALA QUE A VARIAVEL this.sprite.velocidade TERÁ O VALOR DE VELOCIDADE
        this.removida = false;
    }
    show(){
        drawSprite(this.sprite);
    }
    moveX(){
        this.sprite.position.x = this.sprite.position.x + this.sprite.velocidade;//FAZ COM QUE A POSIÇÃO DO SPRITE SEJA ELA MESMA MAIS A VELOCIDADE
        if(this.sprite.position.x > windowWidth){
            this.sprite.position.x = 0;
            this.sprite.velocidade += 0.25;
        }
        if(this.sprite.position.x < 0){
            this.sprite.position.x = windowWidth;
            this.sprite.velocidade -= 0.25;
        }
    }
    moveY(){
        this.sprite.position.y = this.sprite.position.y + this.sprite.velocidade;
        if(this.sprite.position.y > windowHeight){
            this.sprite.position.y = 0;
            this.sprite.velocidade += 0.25;
        }
        if(this.sprite.position.y < 0){
            this.sprite.position.y = windowHeight;
            this.sprite.velocidade -= 0.25;
        }
    }
    colisation(target, valor){
        if(this.sprite.collide(target)){
            target.destroy();
            valor = true
            return valor = true;
        }else{
            return valor = false;
        }
        
        
    }
}