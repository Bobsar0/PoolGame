//Stick function constructor
function Stick(){
    this.position = new Vector2(400, 400);
    this.origin = new Vector2(490, 15); 
}

Stick.prototype.update = function(){
  
    //For testing
    this.position = Mouse.position;

    if(Mouse.left.pressed){
        console.log("Pressed left")
    }
}

Stick.prototype.draw = function(){
    Canvas.drawImage(sprites.stick, this.position, this.origin);
}