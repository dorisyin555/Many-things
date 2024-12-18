let circles = []
let numCircles = 10

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numCircles; i++) {
    let circle = {
      x: random(width),
      y: random(height),
      size: random(20, 50),
      color: color(random(255), random(255), random(255)),
      xSpeed: random(-3, 3),
      ySpeed: random(-3, 3),
      sizeChange: random(-0.5, 0.5),
    }
    circles.push(circle)
  }
}

function draw() {
  background(0)
  for (let circle of circles) {
    fill(circle.color)
    noStroke()
    ellipse(circle.x, circle.y, circle.size)

    circle.x += circle.xSpeed
    circle.y += circle.ySpeed

    circle.size += circle.sizeChange

    if (circle.x < 0 || circle.x > width) {
      circle.xSpeed *= -1
    }
    if (circle.y < 0 || circle.y > height) {
      circle.ySpeed *= -1
    }
    if (circle.size > 100 || circle.size < 10) {
      circle.sizeChange *= -1
    }
  }
}
