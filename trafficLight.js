let color=prompt("Which Color on Traffic Light?");
if(color=="green"){
    console.log("You can Go");
} 
if(color=="yellow"){
    console.log("Start your car");
}
if(color=="red"){
    console.log("Stop!!!");
}
if(color!="red"&& color!="green" && color!="yellow"){
    console.log("Syntax Error and Retry");
}
