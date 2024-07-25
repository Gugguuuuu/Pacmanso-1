class PacmanFood{
    constructor(x, y){
        this.x = x;
        this.y = y;

    }
    show(){
        fill('yellow')
        ellipse(this.x, this.y, 15, 15)
    }
}