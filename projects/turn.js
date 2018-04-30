let state = "unlit";
let action = null;

while(!done) {
    //get input, store in action(up,down,center,press,depress)
    if(state === "unlit") {
        if(action === "up") {
            state = "left";
            console.log("Left Blinker Blinking");
        }
        else if(action === "down") {
            state = "right";
            console.log("Right Blinker Blinking");
        }
        else if(action === "press") {
            state = "both";
            console.log("Both Lights Blinking")
        }
        else {
            console.log("Not Possible");
        }
    }
    else if(state === "left") {
        if(action === "center") {
            state = "unlit";
            console.log("Neither Lights Blinking");
        }
        if(action === "right") {
            state = "right";
            console.log("Right Light Blinking");
        }
        else if(action === "press") {
            state = "both";
            console.log("Both Lights Blinking");
        } 
        else {
            console.log("Not Possible");
        }
    }
    else if(state === "right") {
        if(action === "center") {
            state = "unlit";
            console.log("Neither Lights Blinking");
        }
        if(action === "left") {
            state = "left";
            console.log("Left Light Blinking");
        }
        else if(action === "press") {
            state = "both";
            console.log("Both Lights Blinking");
        } 
        else {
            console.log("Not Possible");
        }
    }
    else if(state === "both") {
        if(action === "up") {
            state = "left";
            console.log("Left Blinker Blinking");
        }
        else if(action === "down") {
            state = "right";
            console.log("Right Blinker Blinking");
        }
        else if(action === "depress") {
            state = "unlit";
            console.log("Both Lights Blinking")
        }
        else {
            console.log("Not Possible");
        }
    }
}