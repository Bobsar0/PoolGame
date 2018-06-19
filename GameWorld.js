//GameWorld is an object that will contain all the physical objects of the game. 
//In each Animationframe request, it will be responsible for updating them and drawing them on the canvas
function GameWorld(){ 
    this.stick = new Stick();

}

GameWorld.prototype.update = function(){
    this.stick.update();
}

GameWorld.prototype.draw = function(){
    Canvas.drawImage(sprites.background, {x:0, y:0}); //Draws the background image
    this.stick.draw();
}