let canSize = 640
let pw = canSize / 32

function setup() {
    createCanvas(canSize, canSize)
    background(230)
    line(width / 2, 0, width / 2, height)
    line(0, pw * 13, width, pw * 13)
    noStroke()
    scotchBonnet()
    drawEyes()
    drawMouth()
}

function drawEyes() {
    fill(255)
    rect(pw * 12, pw * 11, pw * 2, pw * 4)
    rect(pw * 11, pw * 12, pw * 4, pw * 2)
    rect(pw * 18, pw * 11, pw * 2, pw * 4)
    rect(pw * 17, pw * 12, pw * 4, pw * 2)
    fill(0)
    rect(pw * 13, pw * 12, pw * 2, pw * 2)
    rect(pw * 19, pw * 12, pw * 2, pw * 2)
}

function drawMouth() {
  fill(0)
  rect(pw * 14, pw * 17, pw * 5, pw)
  fill(255)
  rect(pw * 17, pw * 17, pw, pw)
}

function scotchBonnet() {
  fill('#FC9D2D')
  rect(pw * 9, pw * 11, pw, pw * 4)
  rect(pw * 11, pw * 9, pw, pw * 8)
  rect(pw * 13, pw * 9, pw, pw * 10)
  rect(pw * 15, pw * 9, pw, pw * 12)
  rect(pw * 17, pw * 9, pw, pw * 12)
  rect(pw * 19, pw * 9, pw, pw * 10)
  rect(pw * 21, pw * 10, pw, pw * 7)
  fill('#F4B264')
  rect(pw * 10, pw * 10, pw, pw * 6)
  rect(pw * 12, pw * 9, pw, pw * 9)
  rect(pw * 14, pw * 9, pw, pw * 11)
  rect(pw * 16, pw * 9, pw, pw * 13)
  rect(pw * 18, pw * 9, pw, pw * 11)
  rect(pw * 20, pw * 9, pw, pw * 9)
  rect(pw * 22, pw * 11, pw, pw * 4)
  fill('#278111')
  rect(pw * 16, pw * 6, pw, pw * 4)
  fill('#2A5E1D')
  rect(pw * 15, pw * 5, pw * 2, pw)
}
