const BALL_ORIGIN = new Vector2(25, 25);

function Ball(position, color){
    this.position = position;
    this.velocity = new Vector2();
    this.moving = false //checks whether the ball is moving or not
    this.sprite = getBallSpriteByColor(color);
}

Ball.prototype.update = function(delta){
    this.position.addTo(this.velocity.mult(delta)) //adds the position of the ball to the velocity
    this.velocity = this.velocity.mult(0.98);

    if(this.velocity.length() < 5){
        this.velocity = new Vector2(); //sets x & y values to be zero
        this.moving = false;
    }
}

Ball.prototype.draw = function(){
    Canvas.drawImage(this.sprite, this.position, BALL_ORIGIN);
}

Ball.prototype.shoot = function(power, rotation){
    this.velocity = new Vector2(power * Math.cos(rotation), power * Math.sin(rotation));
    this.moving = true;
}