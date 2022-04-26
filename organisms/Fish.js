import { Organism } from './Organism.js'
import { Vector, random } from '../utils.js'
import { HEIGHT, WIDTH } from '../config.js'
import { EVENTS } from '../events.js'
import { Graphic } from '../Graphic.js'

export class Fish extends Organism {
  constructor() {
    super()
    this.position = new Vector(random(WIDTH), random(HEIGHT))
    this.velocity = new Vector(random(-1, 1), random(-1, 1))
    this.size = random(150)
    this.graphic = this._render()

    this._setupAnimation()
    this._checkOrientation()
  }

  update() {
    this._checkBounds()
    this._move()
    this._consumeO2()
  }

  _checkBounds() {
    if (this.position.x >= WIDTH || this.position.x === 0) this._flip()
  }

  _checkOrientation() {
    if (this.velocity.x > 0) this.graphic.flip('x')
  }

  _setupAnimation() {
    setInterval(() => {
      this.velocity.multiply(new Vector(1, -1))
    }, random(0, random(2000, 10000)))
  }

  _render() {
    const color = random(0, 360)
    const image = this.draw
      .image('organisms/fish.png')
      .size(this.size, this.size)
      .attr({
        filter: `hue-rotate(${color}deg)`
      })
    return new Graphic(image)
  }

  _flip() {
    this.graphic.flip('x')
    this.velocity.multiply(new Vector(-1, 1))
  }

  _move() {
    this.position.add(this.velocity)
    this.graphic.center(this.position.x, this.position.y)
  }

  _consumeO2() {
    const QUANTITY = 0.2
    this.bus.emit(EVENTS.O2_CONSUMED, QUANTITY);
  }
}