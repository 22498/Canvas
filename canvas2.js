var canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

class Bit {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.state = false;
        addEventListener("mousedown", (evt) => {
            let mouseX = getMousePos(canvas, evt).x;
            let mouseY = getMousePos(canvas, evt).y;
            if (mouseX > this.x && mouseY > this.y && mouseX < this.x + 100 && mouseY < this.y + 100) {
                this.state = !this.state;
                this.draw();
            }
            console.log('hallo', mouseX, mouseY);
        })
    }

    draw() {
        context.beginPath();
        if (this.state){
            context.fillStyle = "green";
        }else {
            context.fillStyle = "red";
        }
        context.rect(this.x, this.y, 100, 100);
        context.stroke();
        context.fill();
        context.closePath();
    }
}

for (let j = 0; j < 8; j++) {
    for (let i = 0; i < 8; i++) {
        var bit = new Bit(i * 100, j * 100);
        bit.draw();
    }
}
