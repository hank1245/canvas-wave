import { Wave } from "./Wave.js";

class Canvas {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.style = "border: 1px solid black";
    document.body.appendChild(this.canvas);
    this.setSize();
    this.wave = new Wave();
    this.animate.bind(this)();
  }
  setSize() {
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;
  }
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.wave.draw(this.ctx);
    this.wave.move();
    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new Canvas();
};
