const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.height = 500
canvas.width = 500

function setup() {
    draw()
}

function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height)    
    ctx.fillStyle = "black"

    // // size of the canvas
    // ctx.beginPath()
    // ctx.rect(0,0,canvas.width, canvas.height)
    // ctx.fill()

    
    requestAnimationFrame(draw)
}

setup()