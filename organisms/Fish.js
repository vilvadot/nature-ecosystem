import { Organism } from './Organism.js'
import { Vector, random } from '../utils.js'
import { HEIGHT, WIDTH } from '../svgContext.js'
import { EVENTS } from '../events.js'

export class Fish extends Organism {
  constructor() {
    super()
    this.position = Vector.RANDOM(WIDTH, HEIGHT)
    this.size = random(150)
    this._setupAnimation()
    this.orientation = new Orientation()
    this.graphic = this._render()
  }

  update() {
    this._checkOrientation()
    this._checkBounds()
    this._move()
    this._consumeO2()
  }

  _checkBounds() {
    if (!Bounds.fitsX(this.position.x)){
      this.acceleration.multiply(new Vector(-1, 1))
      this._flip()
    }
  }

  _setupAnimation() {
    this.acceleration = new Vector(random(-1, 1), .2)

    setInterval(() => {
      this.acceleration.multiply(new Vector(1, -1))
    }, random(0, random(2000, 10000)))
  }

  _render() {
    const color = random(0, 360)
    return this.draw
      .image(this._image())
      .size(this.size, this.size)
      .attr({
        filter: `hue-rotate(${color}deg)`
      })
  }

  _image(){
    return this.orientation.isRight() ? '/fish_right.png' : '/fishLeft.png'
  }

  _flip() {
    this.orientation.flip()
    this.graphic.load(this._image())
  }

  _checkOrientation() {
    const isGoingLeft = this.acceleration.x <= 0;
    if (isGoingLeft && this.orientation.isRight()) {
      this._flip()
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

class Bounds{
  static fitsX(position){
    return position > 0 && position < WIDTH
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
    if (this.heading === 'RIGHT') return this.heading = 'LEFT'
    if (this.heading === 'LEFT') return this.heading = 'RIGHT'
  }
}