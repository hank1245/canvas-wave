export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 0.05;
    this.acc = 0;
    this.range = Math.random() * 10;
  }
  move() {
    this.acc += this.speed;
    this.y += Math.sin(this.acc) * this.range;
  }
}
