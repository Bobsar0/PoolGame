
const STICK_ORIGIN = new Vector2(970, 11);

function Stick(position){
    this.position = position; //Get the position of the stick from outside
    this.rotation = 0;  // Initializes Stick rotation
}

Stick.prototype.update = function(){
    this.updateRotation();
}

//Method to draw the stick
Stick.prototype.draw = function(){
    Canvas.drawImage(sprites.stick, this.position, STICK_ORIGIN, this.rotation);
}

//Method to update the rotation of the stick upon mouse movement
Stick.prototype.updateRotation = function(){
    let opposite = Mouse.position.y - this.position.y;
    let adjacent = Mouse.position.x - this.position.x;

    this.rotation = Math.atan2(opposite, adjacent); //Gets angle of rotation
}