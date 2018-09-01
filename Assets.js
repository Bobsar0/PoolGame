//Functions that will help in loading assets for the game

let sprites = {};
let assetStillLoading = 0; //to keep track of the loading asset

function assetsLoadingLoop(callback){ //same callback function that we received in loadAssets
    if (assetStillLoading){ //we want to re-enter the loop
        requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
    }
    else{
        callback();
    }
}

//Takes in a callback function so that once it finishes loading, all the assets will activate the callback function
function loadAssets(callback){
    
    function loadSprite(fileName){
        assetStillLoading++;

        let spriteImage = new Image(); //creates new image object
        spriteImage.src = "./assets/sprites/" + fileName; //sets location of the image to load

        spriteImage.onload = function(){ //once image is done loading,
            assetStillLoading--;    //decrease the no of images that are still loading
        }
        return spriteImage;
    }
    
    sprites.background = loadSprite('spr_background4.png'); //loads the pool table
    sprites.stick = loadSprite('spr_stick.png') //loads the stick
    sprites.whiteBall = loadSprite('spr_whiteBall2.png') //loads the white ball
    sprites.redBall = loadSprite('spr_redBall2.png') //loads the red ball
    sprites.yellowBall = loadSprite('spr_yellowBall2.png') //loads the yellow ball
    sprites.blackBall = loadSprite('spr_blackBall2.png') //loads the black ball




    assetsLoadingLoop(callback);
}

//Helper function that provides the required sprite based on the color that is passed into it
function getBallSpriteByColor(color){
    switch(color){
        case COLOR.RED:
            return sprites.redBall;
        case COLOR.YELLOW:
            return sprites.yellowBall;
        case COLOR.BLACK:
            return sprites.blackBall;
        case COLOR.WHITE:
            return sprites.whiteBall;
    }
}