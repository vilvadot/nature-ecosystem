import { svgContext } from '../svgContext.js'
import { eventEmitter } from '../events.js'
import { Vector } from '../Vector.js';

export class Organism {
  constructor() {
    this.draw = svgContext;
    this.bus = eventEmitter;
  }

  update(){
    console.info("update() not implemented for", this.constructor.name)
  }
}