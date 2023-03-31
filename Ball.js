export class Ball {
  constructor(stageWidth, stageHeight, radius, speed) {
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.sinValue = 0;
    const diameter = this.radius * 2;
    this.x = diameter + (Math.random() * stageWidth - diameter);
    this.y = diameter + (Math.random() * stageHeight - diameter);
  }
  draw(ctx, block, block2) {
    this.x += this.vx;
    this.y += this.vy;
    this.sinValue += 0.03;
    this.radius += Math.sin(this.sinValue) * 0.7;
    this.bounceWindow(this.stageWidth, this.stageHeight);
    this.bounceBlock(block);
    this.bounceBlock(block2);
    ctx.fillStyle = "#fdd700";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
  bounceWindow(stageWidth, stageHeight) {
    const minX = this.radius;
    const maxX = stageWidth - this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius;
    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    } else if (this.y <= minY || this.y >= maxY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }
  bounceBlock(block) {
    const minX = block.x - this.radius;
    const maxX = block.maxX + this.radius;
    const minY = block.y - this.radius;
    const maxY = block.maxY + this.radius;
    if (this.x > minX && this.x < maxX && this.y > minY && this.y < maxY) {
      const x1 = Math.abs(minX - this.x); //왼쪽과의 거리차이
      const x2 = Math.abs(maxX - this.x); //오른쪽과 거리차이
      const y1 = Math.abs(minY - this.y);
      const y2 = Math.abs(maxY - this.y);
      const min1 = Math.min(x1, x2); //왼쪽 오른쪽 결정
      const min2 = Math.min(y1, y2); //위쪽 아래쪽 결정
      const min = Math.min(min1, min2); // 옆에서 부딪혔는지 위아래에서 부딪혔는지 확인
      //x가 더 작다면 측면 아니면 위아래
      if (min === min1) {
        this.vx *= -1;
        this.x += this.vx;
      } else {
        this.vy *= -1;
        this.y += this.vy;
      }
    }
  }
}
