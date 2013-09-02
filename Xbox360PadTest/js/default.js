// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.

                if (pad.isControllerConnected(0)) document.getElementById("padStatus").innerText = "Xbox 360 Controller detected!";
                else document.getElementById("padStatus").innerText = "No controller detected.";

                
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();

var pad = Xbox360Pad.Pad;

function isConnected(index) {
    return pad.isControllerConnected();
}

function getLT(index) {
    document.getElementById("LTResult").innerText = pad.getLeftTrigger(0);
}

function getRT(index) {
    document.getElementById("RTResult").innerText = pad.getRightTrigger(0);
}

function getLSX(index) {
    document.getElementById("LStickXResult").innerText = pad.getLStickX(0);
}

function getLSY(index) {
    document.getElementById("LStickYResult").innerText = pad.getLStickY(0);
}

function getRSX(index) {
    document.getElementById("RStickXResult").innerText = pad.getRStickX(0);
}

function getRSY(index) {
    document.getElementById("RStickYResult").innerText = pad.getRStickY(0);
}


function btnPressed(index, button) {
    switch (button) {
        case "A":
            document.getElementById("ButtonAResult").innerText = pad.isPressed(index, button);
            break;
        case "B":
            document.getElementById("ButtonBResult").innerText = pad.isPressed(index, button);
            break;
        case "X":
            document.getElementById("ButtonXResult").innerText = pad.isPressed(index, button);
            break;
        case "Y":
            document.getElementById("ButtonYResult").innerText = pad.isPressed(index, button);
            break;
        case "Start":
            document.getElementById("ButtonStartResult").innerText = pad.isPressed(index, button);
            break;
        case "Back":
            document.getElementById("ButtonBackResult").innerText = pad.isPressed(index, button);
            break;
        case "LeftBumper":
            document.getElementById("ButtonLBResult").innerText = pad.isPressed(index, button);
            break;
        case "RightBumper":
            document.getElementById("ButtonRBResult").innerText = pad.isPressed(index, button);
            break;
        case "LeftClick":
            document.getElementById("LClickResult").innerText = pad.isPressed(index, button);
            break;
        case "RightClick":
            document.getElementById("RClickResult").innerText = pad.isPressed(index, button);
            break;
        case "DPadUp":
            document.getElementById("UpResult").innerText = pad.isPressed(index, button);
            break;
        case "DPadDown":
            document.getElementById("DownResult").innerText = pad.isPressed(index, button);
            break;
        case "DPadLeft":
            document.getElementById("LeftResult").innerText = pad.isPressed(index, button);
            break;
        case "DPadRight":
            document.getElementById("RightResult").innerText = pad.isPressed(index, button);
            break;

    }
}

/*while (1) {
    btnPressed(0, "A");
}*/