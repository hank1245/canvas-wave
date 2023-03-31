import { Wave } from "./Wave.js";
import { Ball } from "./Ball.js";
import { Block } from "./Block.js";

class Canvas {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;
    document.body.appendChild(this.canvas);

    this.wave = new Wave(
      this.canvas.width,
      this.canvas.height,
      "rgba(255,0,0,0.4)"
    );
    this.wave2 = new Wave(
      this.canvas.width,
      this.canvas.height,
      "rgba(0,0,255,0.4)"
    );

    this.ball = new Ball(this.canvas.width, this.canvas.height, 20, 10);
    this.block = new Block(340, 30, 100, 250);
    this.block2 = new Block(340, 30, 500, 700);
    this.animate.bind(this)();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.wave.draw(this.ctx);
    this.wave.move();
    this.wave2.draw(this.ctx);
    this.wave2.move();
    this.block.draw(this.ctx);
    this.block2.draw(this.ctx);
    this.ball.draw(this.ctx, this.block, this.block2);
    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new Canvas();
};
