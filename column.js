class Column {
  constructor(position) {
    this.position = position;
    this.alphabets =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.rows = height / text_size;
    this.interval = random(max_interval);
    this.gap = speed;
  }
  render() {
    noStroke();
    fill(0);
    rect(this.position.x, this.position.y, text_size, text_size);
    stroke(20, 255, 20);
    fill(20, 255, 20);
    text(
      this.alphabets[floor(random(this.alphabets.length) + 1)],
      this.position.x,
      this.position.y
    );
  }
  update() {
    if (this.interval <= 0 && this.gap <= 0) {
      this.render();
      this.position.y += text_size;
      this.gap = speed;
    }
    if (this.position.y > height) {
      this.position.y = 0;
      this.interval = random(max_interval);
    }
    this.interval--;
    this.gap--;
  }
}
