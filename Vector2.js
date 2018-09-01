//Function that deals with vector arithmetic operations
function Vector2(x = 0, y = 0){
    this.x = x;
    this.y = y;
}

//Gets a copy of the Vector
Vector2.prototype.copy = function(){
    return new Vector2(this.x, this.y);
}

//Adds the Vector to another vector
Vector2.prototype.addTo = function(vector){
    this.x += vector.x;
    this.y += vector.y;
}

//Multiplies the Vector with a Scalar
Vector2.prototype.mult = function(scalar){
    return new Vector2(this.x * scalar, this.y * scalar);
}

//Gets the length of a Vector
Vector2.prototype.length = function(){
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
}