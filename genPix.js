let canSize = 960
let pw = canSize / 32

function setup() {
    createCanvas(canSize, canSize)
    background(230)
    line(width / 2, 0, width / 2, height)
    line(0, height / 2, width, height / 2)
    
    drawEyes()
}

function draw() {
    noLoop()
}

function drawEyes() {
    noStroke()
    fill(255)
    rect(pw * 12, pw * 14, pw * 2, pw * 4)
    rect(pw * 11, pw * 15, pw * 4, pw * 2)
    rect(pw * 18, pw * 14, pw * 2, pw * 4)
    rect(pw * 17, pw * 15, pw * 4, pw * 2)
    fill(0)
    rect(pw * 13, pw * 15, pw * 2, pw * 2)
    rect(pw * 19, pw * 15, pw * 2, pw * 2)
}
