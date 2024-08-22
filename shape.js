class Shape {
  constructor(width, height, sAngle, radius, outRadius, av) {
    this.width = width;
    this.height = height;
    this.sAngle = sAngle;
    this.radius = radius;
    this.outRadius = outRadius;
    this.av = av;
    this.x = this.width / 2 + this.outRadius * Math.cos(this.sAngle);
    this.y = this.height / 2 + this.outRadius * Math.sin(this.sAngle);
    this.color = "red";
  }
  update() {
    this.sAngle += this.av;
    this.x = this.width / 2 + this.outRadius * Math.cos(this.sAngle);
    this.y = this.height / 2 + this.outRadius * Math.sin(this.sAngle);
    
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    
    ctx.fill()
    
  }
}
