function Game(){ //func constructor

}

Game.prototype.init = function(){ //initialize the game
    this.gameWorld = new GameWorld()
}

Game.prototype.start = function(){ //start the game

    PoolGame.init();

    PoolGame.mainLoop();
}

Game.prototype.mainLoop = function(){ //Controls the game
   
    Canvas.clear();
    PoolGame.gameWorld.update(); 
    PoolGame.gameWorld.draw();
    Mouse.reset();//reset the mouse input for every loop iteration

    requestAnimationFrame(PoolGame.mainLoop); 
}

let PoolGame = new Game();