Xbox360PadTest
==============

XInput wrapper for Windows Metro JavaScript apps and test program.

This wrapper is intended to be used in JavaScript applications under Microsoft's "Metro" interface for Windows 8.
The purpose of writing this wrapper was out of my own necessity. I had started writing a game in HTML5+JavaScript
with the intention of releasing it on the Windows Store. In my tests, I was using Google Chrome and nightly builds
of Mozilla Firefox, both of which support gamepads in JavaScript. Unfortunately, Internet Explorer 10, which Metro
is based on, does not support gamepads. So, I wrote this wrapper in C# that could be called from JavaScript to add
Xbox 360 Controller support to Metro apps. After all, what's the point of writing an action shooter, platformer,
or other reflex-heavy game if you're stuck with using a touchscreen, mouse or keyboard?

In order to use this in your own projects, simply build the Xbox360Pad project with Visual Studio 2012 or newer,
and add the resulting Xbox360Pad.winmd file as a reference in your JavaScript project. The connected controllers
can be initialized in JavaScript as follows:

var pad = Xbox360Pad.Pad;
var numPads = pad.initControllers();

the initControllers() function will initialize all connected controllers, and return the number of pads connected
to the system. To get the state of each button, you will need to call the relevant functions, all which return an
array containing the state of the button, stick or trigger you've called. So, for example, if you would like to
check whether or not the "A" button on controller 1 is pressed, you would call:

if(pad.isPressed("A")[0]) {
  // Your code goes here.
}

Brief documentation for each controller function is below.

Xbox360Pad.isPressed(string button):
Returns an array of bools for each controller's button state.
Supported button strings are: A, B, X, Y, DPadUp, DPadDown, DPadLeft, DPadRight, LeftClick, RightClick,
LeftBumper, RightBumper, Back, and Start.

Xbox360Pad.getLeftTrigger():
Returns an array of bytes for each controller's Left Analog Trigger value, ranging from 0 to 255.

Xbox360Pad.getRightTrigger():
Returns an array of bytes for each controller's Right Analog Trigger value, ranging from 0 to 255.

Xbox360Pad.getLStickX():
Returns an array of shorts for each controller's Left Analog Stick X Axis, ranging from -32767 to 32767.
A dead zone of 10000 is recommended when using this, to compensate for jitter and old, worn-out joysticks.

Xbox360Pad.getLStickY():
Returns an array of shorts for each controller's Left Analog Stick Y Axis, ranging from -32767 to 32767.
A dead zone of 10000 is recommended when using this, to compensate for jitter and old, worn-out joysticks.

Xbox360Pad.getRStickX():
Returns an array of shorts for each controller's Right Analog Stick X Axis, ranging from -32767 to 32767.
A dead zone of 10000 is recommended when using this, to compensate for jitter and old, worn-out joysticks.

Xbox360Pad.getRStickY():
Returns an array of shorts for each controller's Right Analog Stick Y Axis, ranging from -32767 to 32767.
A dead zone of 10000 is recommended when using this, to compensate for jitter and old, worn-out joysticks.

Xbox360Pad.setLeftVibrate(int index, ushort speed):
Sets vibration speed of left rumble motor on indexed controller. To turn off the rumble, simply set the speed to 0.

Xbox360Pad.setRightVibrate(int index, ushort speed):
Sets vibration speed of right rumble motor on indexed controller. To turn off the rumble, simply set the speed to 0.

In the future, I plan on adding more features to this, such as battery status and support for headsets, so games 
can include voice chat. However, in its current state, I believe it's perfectly capable of being included in your
Windows Store games, to give the user a more console-like experience, and make the games more fun to play in general.
Have fun!
