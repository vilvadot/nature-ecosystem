export class Vector {
  static get ZERO() {
    return new Vector(0, 0)
  }

  static RANDOM(xMax, yMax) {
    return new Vector(random(xMax), random(yMax))
  }

  static substract(vector1, vector2) {
    const x = vector1.x - vector2.x
    const y = vector1.y - vector2.y
    return new Vector(x, y)
  }

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  _magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  normalize() {
    const magnitude = this._magnitude()
    if (magnitude === 0) return

    this.x = this.x / magnitude
    this.y = this.y / magnitude
    return this
  }

  add(vector) {
    this.x = this.x + vector.x
    this.y = this.y + vector.y
    return this;
  }

  multiply(vector) {
    this.x = this.x * vector.x;
    this.y = this.y * vector.y;
    return this
  }

  limit(maximum) {
    if (this._magnitude() > maximum) {
      this.normalize().scale(maximum)
    }
    return this
  }

  scale(scalar) {
    this.x = this.x * scalar;
    this.y = this.y * scalar;
    return this
  }
}