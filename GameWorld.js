//GameWorld is an object that will contain all the physical objects of the game. 
//In each Animationframe request, it will be responsible for updating them and drawing them on the canvas

function GameWorld(){ 
    this.whiteBall = new Ball(new Vector2(413, 413));
    this.stick = new Stick(
        new Vector2(413, 413), 
        this.whiteBall.shoot.bind(this.whiteBall) //makes sure we don't lose the reference to the white ball
    );
}

GameWorld.prototype.update = function(){
    this.stick.update();
    this.whiteBall.update();
}

GameWorld.prototype.draw = function(){
    Canvas.drawImage(sprites.background, {x:0, y:0}); //Draws the background image
    this.stick.draw();
    this.whiteBall.draw();
}