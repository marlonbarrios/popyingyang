
let canvas;

let cellSize = 60;

function setup() {
  createCanvas(1024, 1024);
  noLoop();
  mbsFramework();
  credits();
}

function draw() {
  rectMode(CENTER)

  let step = cellSize;
  noStroke();

  background(255);
  let x = 0;
  let y = 0;
  for(var i = x; i < width; i += step) {
  for(var j = y; j < height; j+= step) {

    let r = Math.random() >= 0.5;
    if(r > 0.5) {
    fill(0)
    rect(0 + i, 0 + j, step, step)
    fill(255)
    circle(0 + i, 0 + j, step/2, step/2)
     fill(255)
    circle(0 + i, 0 + j, step/4, step/4)
  } else {
    fill(255)
    rect(0 + i, 0 + j, step, step)
    fill(0)
    circle(0 + i, 0 + j, step/2, step/2)
    fill(255)
    circle(0 + i, 0 + j, step/4, step/4)
   }
}
}
}

function keyPressed() {
  let m = month();
  let d = day();
  let y = year();
  let t = hour() + ':' + minute();
  if (key == 'S' || key == 's') 
    saveCanvas(canvas, 'canvas' + m + d + y + t , 'png');
}
  
function windowResized() {

  if (windowWidth < 900) {
    resizeCanvas( 512, 512);
  } else {
      resizeCanvas(1024, 1024);
  }
}

function mbsFramework() {
  //template for canvas while printing and exporting/exhition on web/minimal
  canvas = createCanvas(1024, 1024); // will export as 512x512
  canvas.style("margin", "auto");
  canvas.style("margin-top", "5%");
  canvas.style("display", "flex");
  canvas.style("justify-content", "center");
  canvas.style("align-items", "center");
  canvas.style("border-radius", "10px");
  canvas.style("position", "relative");
  canvas.style("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
  canvas.style("zoom", "0.5");
  canvas.style('dpi', '300');
  canvas.style('bleed', '1/8');
  noCursor();
}

function credits() {
//credits
  createP("Pop Ying-Yang");
  createP("Grid Study with squares-circles and back and white. Inspireg by the work of Vasarelli" );
  createP("Press 's' to save a png image");
  var link =createA("https://marlonbarrios.github.io/", "Programmed by Marlon Barrios Solano");

  createElement('title', 'Pop Ying-Yang')

  var allPs = selectAll("p")
  for (var i = 0; i < allPs.length; i++) {
    allPs[i].style("font-family", "Helvetica");
    allPs[i].style("justify-content", "center");
    allPs[i].style("align-items", "center");
    allPs[i].style("position", "relative");
    allPs[i].style("text-align", "center");
    allPs[i].style("display", "flex");
    allPs[i].style("font-size", "15px");
    allPs[i].style("color", "black");
    allPs[i].style("margin", "8px");
  }

  link.style("font-family", "Helvetica");
  link.style("justify-content", "center");
  link.style("align-items", "center");
  link.style("position", "relative");
  link.style("text-align", "center");
  link.style("display", "flex");
  link.style("font-size", "15px");
  link.style("color", "black");
  link.style("text-decoration", "none");

}


