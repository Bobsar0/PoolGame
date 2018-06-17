//Function constructor to create our canvas object
function Canvas2D(){
    this._canvas = document.getElementById('screen'); //The canvas itself
    this._canvasContext = this._canvas.getContext('2d')
}

//Prototype function to clear the canvas
Canvas2D.prototype.clear = function(){
    this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
}

//Method to draw image
Canvas2D.prototype.drawImage = function(image, position){
    this._canvasContext.drawImage(image, position.x, position.y);
}

//Object using constructor
let Canvas = new Canvas2D();

//For testing
let image = new Image();
image.src = "./assets/imgs/spr_background5.png"; //location of the image

setTimeout(() => { //needed because image doesn't load immediately
    Canvas.drawImage(image, {x:0, y:0});
}, 1000);