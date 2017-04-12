function setup() {
createCanvas(600, 600);
}
function draw() {
    background(10, 0, random(120));
    for(var d = 10; d<=500; d += 5) {
        stroke(random(150), 0, random(155));
        strokeWeight(2);
        noFill();
        ellipse(width/2, height/2, width-50, d);
        d = d + 10;
    }
  }