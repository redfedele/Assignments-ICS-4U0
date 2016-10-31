function volcano() {
  this.pointOneY = 400;
  this.volcanoGrowth = -1;
  this.pointOneX = width / 2;

  this.display = function() {
    noStroke();
    fill(89, 50, 14)
    triangle(this.pointOneX - 100, height, this.pointOneX, this.pointOneY, this.pointOneX + 100, height);
  }

}