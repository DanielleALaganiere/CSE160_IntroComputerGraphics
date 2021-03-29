//This is a good intro program for HTML to teach the basics

console.log("Hello World")

function clear(){
  console.log("Cleared the canvas");
  //x, y, width, height
  //total = 400 x 400, as defined in the HTML file
  context.fillStyle = "black"
  //strokestyle?
  context.clearRect(0, 0, myCanvas.width, myCanvas.height);
  //you can also use numbers instead of the variables, ie: (0, 0, 100, 100)
}


function drawVector(v, color) {
  context.strokeStyle = color;
  const SCALE = 20;

  //make the origin the center of the canvas
  let originX = myCanvas.width/2;
  let originY = myCanvas.height/2;

  context.beginPath();
  context.moveTo(originX, originY);
  //draw a line to a second point
  //elements of the vector: [0]=x  [1]=y  [2]=z
  //use ()-) for the y coordinate because 0,0 is the top left corner (lower = higher)
  context.lineTo(originX+(v.elements[0]*SCALE), originY-(v.elements[1]*SCALE);
  //finish the line
  context.stroke();
}


function handleDrawEvent() {
  //called when the draw function is called
  console.log("Draw button pressed!");
  clear();

  //get the value in the tag, not the tag itself
  let v1_y = document.getElementById("v1_y").value;
  let v1_x = document.getElementById("v1_x").value;

  let v1 = new Vector3([v1_x, v1_y, 0])

  drawVector(v1, "red");

}


function main(){
  //this is a global variable
  globalVariable = 4;
  //this is a local variable
  let localVariable = 4;
  //this is a constant variable
  const constVariable = 4;

  //document is a built in object (HTML document)
  myCanvas = document.getElementById("canvas1");
  //console.log(myCanvas);

  //get the rendering context for 2d drawing
  context = myCanvas.getContext("2D");
  //console.log(context);

  clear();

  //good for testing the draw vector
  let x = new Vector3([5,0,0]);
  let y = new Vector3([0,5,0]);
  //let diagonal = new Vector3([5,5,0]);
  //drawVector(x, "red");
  //drawVector(y, "blue");
  //drawVector(diagonal, "green");
  console.log("v1 before adding: %d", v1.elements);
  v1.add(v2)
  console.log("v1 after adding: %d",v1.elements);

}
