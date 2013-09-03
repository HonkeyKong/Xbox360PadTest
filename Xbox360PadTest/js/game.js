var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
 
canvas.width = screen.width;
canvas.height = screen.height;

var pad = Xbox360Pad.Pad; // Create the controller object.
var numPads = pad.initControllers(); // Initialize and return number of connected controllers.

var mySprite = {
	x: 200,
	y: 200,
	width: 50,
	height: 50,
	speed: 200,
	color: '#c00'
}

/* The controller functions return an array with the state of all the connected controllers. 
In this case, we're grabbing index 0, which denotes player 1. 
Obviously, indices 1, 2, and 3 denote players 2, 3 and 4.

Valid options for pad.isPressed() are A, B, X, Y, DPadUp, DPadDown, DpadLeft, DPadRight,
LeftClick, RightClick, LeftBumper, RightBumper, Back, and Start.

The Left and Right analog triggers can be accessed with getLeftTrigger() and getRightTrigger(),
respectively. Each returns a byte value between 0 and 255.

To access the analog joystick axes, the functions getLStickX(), getLStickY(),
getRStickX(), and getRStickY(). These functions return an unsigned short between
-32767 and 32767. To compensate for jitter and old, worn-out joysticks, a deadzone
threshold of 10000 is recommended. */

function update(mod) {
    if (pad.isConnected()[0]) {
        if ((pad.isPressed("DPadLeft")[0]) || (pad.getLStickX()[0] <= -10000)) { // Left
            mySprite.x -= mySprite.speed * mod;
        }
        if ((pad.isPressed("DPadUp")[0]) || (pad.getLStickY()[0] >= 10000)) { // Up
            mySprite.y -= mySprite.speed * mod;
        }
        if ((pad.isPressed("DPadRight")[0]) || (pad.getLStickX()[0] >= 10000)) { // Right
            mySprite.x += mySprite.speed * mod;
        }
        if ((pad.isPressed("DPadDown")[0]) || (pad.getLStickY()[0] <= -10000)) { // Down
            mySprite.y += mySprite.speed * mod;
        }
        if (pad.isPressed("A")[0]) { // A Button
            mySprite.color = '#0c0';
        }
        if (pad.isPressed("B")[0]) { // B Button
            mySprite.color = '#c00';
        }
        if (pad.isPressed("X")[0]) { // X Button
            mySprite.color = '#00c';
        }
        if (pad.isPressed("Y")[0]) { // Y Button
            mySprite.color = '#cc0';
        }
    }
}

function render() {
	ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = mySprite.color;
    ctx.fillRect(mySprite.x, mySprite.y, mySprite.width, mySprite.height);
}

function run() {
    update((Date.now() - time) / 1000);
    render();
    time = Date.now();
}
 
var time = Date.now();
setInterval(run, 10);