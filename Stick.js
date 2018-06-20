
const STICK_ORIGIN = new Vector2(970, 11);
const STICK_SHOT_ORIGIN = new Vector2(950, 11);

function Stick(position, onShoot){
    this.position = position; //Get the position of the stick from outside
    this.rotation = 0;  // Initializes Stick rotation
    this.origin = STICK_ORIGIN.copy(); //Copy of stick origin
    this.power = 0;  //Initializes shot power
    this.onShoot = onShoot;
}

Stick.prototype.update = function(){
    if (Mouse.left.down){
        this.increasePower();
    }
    else if(this.power > 0){ //if the left mouse button is released
        this.shoot();
    }

    this.updateRotation();
}

//Method to draw the stick
Stick.prototype.draw = function(){
    Canvas.drawImage(sprites.stick, this.position, this.origin, this.rotation);
}

//Method to update the rotation of the stick upon mouse movement
Stick.prototype.updateRotation = function(){
    let opposite = Mouse.position.y - this.position.y;
    let adjacent = Mouse.position.x - this.position.x;

    this.rotation = Math.atan2(opposite, adjacent); //Gets angle of rotation
}

Stick.prototype.increasePower = function(){
    this.power += 100;
    this.origin.x += 5;
}

Stick.prototype.shoot = function(){
    this.onShoot(this.power, this.rotation);
    this.power = 0;
    this.origin = STICK_SHOT_ORIGIN.copy();
}