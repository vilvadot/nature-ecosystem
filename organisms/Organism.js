import { svgContext } from '../svgContext.js'
import { eventEmitter } from '../events.js'

export class Organism {
  constructor() {
    this.draw = svgContext;
    this.bus = eventEmitter;
  }
}