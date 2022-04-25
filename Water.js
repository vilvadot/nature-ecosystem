import { eventEmitter, EVENTS } from "./events.js";

export class Water {
  constructor() {
    this.oxygen = new Oxygen()
    this.bus = eventEmitter
  }
}

class Oxygen {
  constructor() {
    this.bus = eventEmitter
    this.level = 0;

    this.bus.subscribe(EVENTS.O2_CREATED, value => {
      this._increase(value)
    });

    this.bus.subscribe(EVENTS.O2_CONSUMED, value => {
      this._decrease(value)
    });
  }

  getLevel() {
    return this.level;
  }

  _increase(value) {
    if (this.quantity >= 100) return
    this.quantity += value
  }

  _decrease(value) {
    if (this.quantity <= 0) return
    this.quantity -= value
  }
}