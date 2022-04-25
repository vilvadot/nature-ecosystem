import {Organism} from './Organism.js'
import {Vector, random} from '../utils.js'
import { HEIGHT, WIDTH } from '../svgContext.js'
import {EVENTS} from '../events.js'

export class Fish extends Organism {
  constructor() {
    super()
    this.position = Vector.RANDOM(WIDTH, HEIGHT)
    this.acceleration = new Vector(random(-1, 1), 1)
    setInterval(() => {
      this.acceleration = new Vector(this.acceleration.x, this.acceleration.y * -.5)
    }, random(0, 1000))
    const size = random(150)
    this.graphic = this.draw.image('/organisms/fish.png').size(size, size)
    this.orientation = 'RIGHT'
  }

  update() {
    this._consumeO2()
    this._move()
  }

  _checkOrientation() {
    if (this.acceleration.x <= 0 && this.orientation === 'RIGHT') {
      this.orientation = 'LEFT'
      this.graphic.load('/organisms/fish_left.png')
    }
  }

  _move() {
    this.position = this.position.add(this.acceleration)
    this._checkOrientation()
    this.graphic.center(this.position.x, this.position.y)
  }

  _consumeO2() {
    const QUANTITY = 0.2
    this.bus.emit(EVENTS.O2_CONSUMED, QUANTITY);
  }
}