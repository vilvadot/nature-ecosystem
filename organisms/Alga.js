import {Organism} from './Organism.js'
import { HEIGHT, WIDTH } from '../svgContext.js'
import { random} from '../utils.js'
import { EVENTS } from '../events.js';

export class Alga extends Organism {
  constructor() {
    super()
    this.x = parseInt(Math.random() * WIDTH);
    this.y = HEIGHT;
    this.size = random(50, 200)
    this.graphic = this.draw.image('/organisms/seaweed.gif').size(this.size, this.size).move(this.x, this.y - this.size)
  }

  update() {
    this._makePhotosynthesis()
  }

  _makePhotosynthesis() {
    const QUANTITY = .1
    this.bus.emit(EVENTS.O2_CREATED, QUANTITY);
  }
}