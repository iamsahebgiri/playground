const color = () => {
  const colors = [
    "#0ABFAD",
    "#5FF5AE",
    "#3D79F2",
    "#F2AE30",
    "#F26938",
    "#F2F2F2",
  ];
  //   return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
  return colors[Math.floor(Math.random() * colors.length)];
};

class Square {
  constructor(ctx, x, y, h, w, vx, vy) {
    this.img = new Image();
    this.img.src = "./dvd.svg";

    this.ctx = ctx;

    this.x = x;
    this.y = y;

    this.h = h;
    this.w = w;

    this.vx = vx;
    this.vy = vy;

    this.color = "rgba(255, 255, 255, 1)";
  }

  update(dt) {
    const height = this.ctx.canvas.height;
    const width = this.ctx.canvas.width;
    if (this.x > width - this.w || this.x < 0) {
      this.vx *= -1;
      this.color = color();
    }
    if (this.y > height - this.h || this.y < 0) {
      this.vy *= -1;
      this.color = color();
    }
    this.x += this.vx * dt;
    this.y += this.vy * dt;
  }

  render() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.h, this.w);
    // this.ctx.drawImage(this.img, this.x, this.y);
  }
}
