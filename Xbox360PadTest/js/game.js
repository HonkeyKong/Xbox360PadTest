var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
 
canvas.width = screen.width;
canvas.height = screen.height;

var keysDown = {};

var pad = Xbox360Pad.Pad;
var numPads = pad.initControllers();

window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
});

window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});

var mySprite = {
	x: 200,
	y: 200,
	width: 50,
	height: 50,
	speed: 200,
	color: '#c00'
}

function update(mod) {
    if ((pad.isPressed("DPadLeft")[0]) || (pad.getLStickX()[0] <= -10000)) { //left
        mySprite.x -= mySprite.speed * mod; 
    }
    if ((pad.isPressed("DPadUp")[0]) || (pad.getLStickY()[0] >= 10000)) { //up
        mySprite.y -= mySprite.speed * mod;
    }
    if ((pad.isPressed("DPadRight")[0]) || (pad.getLStickX()[0] >= 10000)) { //right
        mySprite.x += mySprite.speed * mod;
    }
    if ((pad.isPressed("DPadDown")[0]) || (pad.getLStickY()[0] <= -10000)) { //down
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