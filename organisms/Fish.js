import { Organism } from './Organism.js'
import { random } from '../utils.js'
import { Vector } from '../Vector.js'
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

export class FollowerFish extends Organism {
  constructor(mouse) {
    super()
    this.mouse = mouse
    this.position = new Vector(random(WIDTH), random(HEIGHT))
    this.velocity = Vector.ZERO;
    this.acceleration = new Vector(.1, .1);
    this.size = 50;
    this.graphic = this._render()
    this.orientation = 'LEFT'
  }

  update() {
    this._moveTowardsMouse()
  }

  _moveTowardsMouse() {
    const mousePosition = this.mouse.getPosition()
    const direction = Vector.substract(mousePosition, this.position)
  
    this.acceleration = direction.normalize().scale(2)
    this.velocity.add(this.acceleration).limit(4);
    this.position.add(this.velocity)
    this._checkIfMouseCatched(mousePosition)
  this._checkOrientation()
    this.graphic.center(this.position.x, this.position.y)
  }

  _flip() {
    this.graphic.flip('x')
    this.velocity.multiply(new Vector(-1, 1))
  }

  _checkOrientation() {
    const isMovingRight = this.velocity.x > 0
    if (isMovingRight && this.orientation === 'LEFT') {
      this.orientation = 'RIGHT'
      this.graphic.flip('x')
    }
    const isMovingLeft = this.velocity.x < 0
    if (isMovingLeft && this.orientation === 'RIGHT') {
      this.orientation = 'LEFT'
      this.graphic.flip('x')
    }
  }

  _checkIfMouseCatched(mousePosition){
    if(Vector.difference(this.position, mousePosition) < 10){
      this.position = mousePosition.copy()
    }
  }

  _render() {
    const image = this.draw
      .image('organisms/follower.png')
      .size(this.size, this.size)
    return new Graphic(image)
  }
}