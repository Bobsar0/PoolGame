//Handles the mouse input

function handleMouseMove(event){ //Gets an event by default

    //Fetch the mouse position from the event object
    let x = event.pageX;
    let y = event.pageY;

    Mouse.position = new Vector2(x,y);
}

function handleMouseDown(evt){
    handleMouseMove(evt); //Gets the current position of the mouse

    // If a mouse button is down, sets the down property of the corresponding button state to be true 
    if (evt.which === 1){ //which is 1 means that the left button is down
        if (!Mouse.left.down) //If the left button was not down already
        Mouse.left.pressed = true;
        Mouse.left.down = true;
    } else if(evt.which === 2){ //which is 2 means that the middle button is down
        if (!Mouse.middle.down)//If the middle button was not down already
        Mouse.middle.pressed = true;
        Mouse.middle.down = true;
    } else if(evt.which === 3){ //which is 3 means that the right button is down
        if (!Mouse._right.down) //if the right button was not down already
        Mouse.right.pressed = true;
        Mouse.right.down = true;
    }
}

function handleMouseUp(evt){
    handleMouseMove(evt); //Gets the current position of the mouse

    // If a mouse button is released, sets the down property of the corresponding button state to be false 
    if (evt.which === 1){ 
        Mouse.left.down = false;
    } else if(evt.which === 2){ 
        Mouse.middle.down = false;
    } else if(evt.which === 3){
        Mouse.right.down = false;
    }
}

function MouseHandler(){
    //3 button states for every button on our mouse
    this.left = new ButtonState();
    this.middle = new ButtonState();
    this.right = new ButtonState();
    
    this.position = new Vector2();

    document.onmousemove = handleMouseMove;//Call handleMouseMove() once there is a mouse movement
    document.onmousedown = handleMouseDown; //Call handleMouseDown() once the mouse is clicked 
    document.onmouseup = handleMouseUp; //Call handleMouseUp() once the mouse is released
}

//Method to reset the mouse input

MouseHandler.prototype.reset = function(){
    this.left.pressed = false;
    this.middle.pressed = false;
    this.right.pressed = false;
}

let Mouse = new MouseHandler();