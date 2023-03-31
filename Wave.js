import { Point } from "./Point.js";

export class Wave {
  constructor(width, height, color) {
    this.color = color;
    this.width = width;
    this.height = height;
    this.points = [];
    this.numberOfPoints = 6;
    this.pointGap = this.width / (this.numberOfPoints - 1);
    this.center = this.height / 2;
    this.setPoints();
  }

  setPoints() {
    for (let i = 0; i < this.numberOfPoints; i++) {
      this.points[i] = new Point(i, this.pointGap * i, this.center);
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.moveTo(this.points[0].x, this.points[0].y);

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;
    for (let i = 1; i < this.numberOfPoints; i++) {
      //이전점과 현재점의 중간 지점. 곡선함수를 위해 계산
      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;
      ctx.quadraticCurveTo(prevX, prevY, cx, cy);
      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    //바닥부터 채우기
    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.width, this.height);
    ctx.lineTo(0, this.height);
    ctx.lineTo(this.points[0].x, this.points[0].y);
    ctx.fill();
    ctx.closePath();
  }
  move() {
    for (let i = 0; i < this.numberOfPoints; i++) {
      //처음과 끝점 빼고 움직이게 하기
      if (i !== 0 && i !== this.numberOfPoints - 1) {
        this.points[i].move();
      }
    }
  }
}
