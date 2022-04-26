export const random = (max, min = 0) => {
  return Math.random() * (max - min) + min;
}

export const times = (times, callback) => {
  for(let i = 0; i < times; i++){
    callback(i)
  }
}

export class Vector {
  static ZERO() {
    return new Vector(0, 0)
  }

  static RANDOM(xMax, yMax){
    return new Vector(random(xMax), random(yMax))
  }

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    this.x = this.x + vector.x
    this.y = this.y + vector.y
    return this;
  }

  multiply(multiplier){
    this.x = this.x * multiplier;
    this.y = this.y * multiplier;
    return this
  }
}

export class Debugging {
  static render(data) {
    const debug = document.querySelector('#debugging')
    debug.innerHTML = JSON.stringify(data, null, 2)
  }
}