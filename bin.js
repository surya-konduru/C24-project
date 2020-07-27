class Bin {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    var bottom = createSprite(x, y, width, 10);
    var left = createSprite(x - (width / 2), y - (height / 2), 10, height);
    var right = createSprite(x + (width / 2), y - (height / 2), 10, height);

    this.bin = Body.create().render.sprite = bottom;
    this.left = Body.create().render.sprite = left;
    this.right = Body.create().render.sprite = right;

    World.add(world, [this.bin, this.left, this.right]);
  }
}