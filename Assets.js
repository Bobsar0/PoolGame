//Functions that will help in loading assets for the game

let sprites = {};
let assetStillLoading = 0;

function assetsLoadingLoop(callback){ //same callback function that we received in loadAssets
    if (assetsStillLoading){ //we want to re-enter the loop
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

        let spriteImage = new Image(); //creates ew image object
        spriteImage.src = "./assets/sprites/" + fileName; //sets location of the image to load

        spriteImage.onload = function(){ //once image is done loading,
            assetStillLoading--;    //decrease the no of images that are still loading
        }
        return spriteImage;
    }
    
    sprites.background = loadSprite('spr_background4.png'); 
    sprites.stick = loadSprite('spr_stick.png') 

    assetsLoadingLoop(callback);
}