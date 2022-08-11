import { Ball } from "./ball.js";
import { Block } from "./block.js";

class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        document.body.appendChild(this.canvas);

        this.ball = new Ball(this.canvasWidth, this.canvasHeight, 30, 10);

        this.block = new Block(600, 10, 150, 350);

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.canvasWidth = document.body.clientWidth;
        this.canvasHeight = document.body.clientHeight;

        this.canvas.width = this.canvasWidth * 2;
        this.canvas.height = this.canvasHeight * 2;
        this.ctx.scale(2, 2);
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        this.block.draw(this.ctx);
        this.ball.draw(this.ctx, this.canvasWidth, this.canvasHeight, this.block);
    }
}

window.onload = () => {
    new App();
};