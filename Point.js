export class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.originY = y;
    this.speed = 0.01;
    this.acc = index;
    this.range = Math.random() * 150 + 150;
  }
  move() {
    this.acc += this.speed;
    this.y = this.originY + Math.sin(this.acc) * this.range;
  }
}
