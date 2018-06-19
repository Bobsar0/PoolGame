//Function constructor to create our canvas object
function Canvas2D(){
    this._canvas = document.getElementById('screen'); //The canvas itself
    this._canvasContext = this._canvas.getContext('2d') //treats the position of the image as the top left corner of the image
}

//Prototype function to clear the canvas
Canvas2D.prototype.clear = function(){
    this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
}

//Method to draw image
Canvas2D.prototype.drawImage = function(image, position, origin){

    if(!position){ // if the position of the image is null or 'undefined'
        position = new Vector2();
    }
    if(!origin){ //If the origin of the image is null or 'undefined'
        origin = new Vector2();
    }
    this._canvasContext.save(); //saves the current state of the context
    this._canvasContext.translate(position.x, position.y); //translates the context to a different position
    this._canvasContext.drawImage(image, -origin.x, -origin.y); //draw the image with the top left corner position passed in as origin. COntext will now treat the position of the image as defined by origin. This prevents the mouse arrow from being on the left corner of the stick
    this._canvasContext.restore(); //restore the context to the last saved state

}

//Object using constructor
let Canvas = new Canvas2D();

// //For testing
// let image = new Image();
// image.src = "./assets/imgs/spr_background5.png"; //location of the image

// setTimeout(() => { //needed because image doesn't load immediately
//     Canvas.drawImage(image, {x:0, y:0});
// }, 1000);