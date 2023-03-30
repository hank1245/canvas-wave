import { Point } from "./Point.js";

export class Wave {
  constructor() {
    this.points = [];
    this.numberOfPoints = 6;
    this.pointGap = 150;
    this.init();
  }
  init() {
    for (let i = 0; i < this.numberOfPoints; i++) {
      this.points[i] = new Point(this.pointGap * i, 200);
    }
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "#ff0000";
    ctx.moveTo(this.points[0].x, this.points[0].y);
    for (let i = 1; i < this.numberOfPoints; i++) {
      //   ctx.arc(this.points[i].x, this.points[i].y, 30, 0, 2 * Math.PI);
      ctx.lineTo(this.points[i].x, this.points[i].y);
    }
    ctx.fill();
    ctx.closePath();
  }
  move() {
    for (let i = 0; i < this.numberOfPoints; i++) {
      this.points[i].move();
    }
  }
}
