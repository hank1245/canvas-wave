import { Wave } from "./Wave.js";

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

    this.animate.bind(this)();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.wave.draw(this.ctx);
    this.wave.move();
    this.wave2.draw(this.ctx);
    this.wave2.move();
    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new Canvas();
};
