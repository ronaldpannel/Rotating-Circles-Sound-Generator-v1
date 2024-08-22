class Note {
  constructor(width, height, angle, radius, outRadius, soundFrequency, hue) {
    this.angle = angle;
    this.radius = radius;
    this.outRadius = outRadius;
    this.soundFrequency = soundFrequency;
    this.x = width / 2 + this.outRadius * Math.cos(this.angle);
    this.y = height / 2 + this.outRadius * Math.sin(this.angle);
    this.hue = hue
  }
  update(x, y) {
    if (this.collision(x, y)) {
      playSound(this.soundFrequency)
      this.radius = 25
    }else{
      if(this.radius == 25){
      this.radius *= 0.1
      this.radius = 10
      }
  }
     
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    
    ctx.fill();
    ctx.closePath();
  }

  collision(x, y) {
    if (
      x >= this.x - 10 &&
      x <= this.x + 10 &&
      y >= this.y - 10 &&
      y <= this.y + 10
    ) {
      return true;
    } else {
      return false;
    }
  }
}
