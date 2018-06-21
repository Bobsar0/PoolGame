//GameWorld is an object that will contain all the physical objects of the game. 
//In each Animationframe request, it will be responsible for updating them and drawing them on the canvas

const DELTA = 1/100; //represents how mamy times an update occurs on each iteration. 

function GameWorld(){ 
    //Array that contains all the arguments needed to create the Ball objects
    this.balls = [
        [new Vector2(1022,413), COLOR.YELLOW], //1
        [new Vector2(1056,393), COLOR.YELLOW], //2
        [new Vector2(1056,433), COLOR.RED], //3
        [new Vector2(1090,374), COLOR.RED], //4
        [new Vector2(1090,413), COLOR.BLACK], //5
        [new Vector2(1090,452), COLOR.YELLOW], //6
        [new Vector2(1126,354), COLOR.YELLOW], //7
        [new Vector2(1126,393), COLOR.RED], //8
        [new Vector2(1126,433), COLOR.YELLOW], //9
        [new Vector2(1126,472), COLOR.RED], //10
        [new Vector2(1162,335), COLOR.RED], //11
        [new Vector2(1162,374), COLOR.RED], //12
        [new Vector2(1162,413), COLOR.YELLOW], //13
        [new Vector2(1162,452), COLOR.RED], //14
        [new Vector2(1162,491), COLOR.YELLOW], //15
        [new Vector2(413,413), COLOR.WHITE]
    ].map(params => new Ball(params[0], params[1]))

    this.whiteBall = this.balls[this.balls.length - 1]; //the last ball
    this.stick = new Stick(
        new Vector2(413, 413), 
        this.whiteBall.shoot.bind(this.whiteBall) //makes sure we don't lose the reference to the white ball
    );
}

GameWorld.prototype.update = function(){
    this.stick.update();
    
    //Loop to update each ball
    for (let i = 0; i <this.balls.length; i++){
        this.balls[i].update(DELTA);//The DELTA is passed in as a fraction that will update the ball just at that fraction of the velocity on every iteration
    }

    if(!this.ballMoving() && this.stick.shot){ //If the ball is not moving after stick has been shot
        this.stick.reposition(this.whiteBall.position); //reposition the stick to the new position of the white ball
    }
}

GameWorld.prototype.draw = function(){
    Canvas.drawImage(sprites.background, {x:0, y:0}); //Draws the background image
    this.stick.draw();
    for (let i = 0; i <this.balls.length; i++){
        this.balls[i].draw(DELTA);//The DELTA is passed in as a fraction that will update the ball just at that fraction of the velocity on every iteration
    }
    
}

GameWorld.prototype.ballMoving = function(){
    return this.whiteBall.moving;
}