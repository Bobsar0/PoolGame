
const STICK_ORIGIN = new Vector2(970, 11);

function Stick(position){
    this.position = position; //Get the position of the stick from outside
}

Stick.prototype.update = function(){
  
    // //For testing
    // this.position = Mouse.position;

    // if(Mouse.left.pressed){
    //     console.log("Pressed left")
    // }

}

//Method to draw the stick
Stick.prototype.draw = function(){
    Canvas.drawImage(sprites.stick, this.position, STICK_ORIGIN);
}