import { Organism } from './Organism.js'
import { Vector, random } from '../utils.js'
import { HEIGHT, WIDTH } from '../svgContext.js'
import { EVENTS } from '../events.js'

export class Fish extends Organism {
  constructor() {
    super()
    this.position = Vector.RANDOM(WIDTH, HEIGHT)
    this.size = random(150)
    this.orientation = new Orientation()
    this.graphic = this._render()
    this._setupAnimation()
  }

  update() {
    this._checkOrientation()
    this._move()
    this._consumeO2()
  }

  _setupAnimation() {
    this.acceleration = new Vector(random(-1, 1), .2)

    setInterval(() => {
      this.acceleration.multiply(new Vector(1, -1))
    }, random(0, random(2000, 10000)))
  }

  _render() {
    return this.draw
      .image('/organisms/fish.png')
      .size(this.size, this.size)
  }

  _checkOrientation() {
    const isGoingLeft = this.acceleration.x <= 0;
    if (isGoingLeft && this.orientation.isRight()) {
      this.orientation.flip()
      this.graphic.load('/organisms/fish_left.png')
    }
  }

  _move() {
    this.position.add(this.acceleration)
    this.graphic.center(this.position.x, this.position.y)
  }

  _consumeO2() {
    const QUANTITY = 0.2
    this.bus.emit(EVENTS.O2_CONSUMED, QUANTITY);
  }
}

class Orientation {
  constructor() {
    this.heading = 'RIGHT'
  }

  isRight() {
    return this.heading === 'RIGHT'
  }

  flip() {
    if (this.heading === 'RIGHT') this.heading = 'LEFT'
    if (this.heading === 'LEFT') this.heading = 'RIGHT'
  }
}