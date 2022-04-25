export class EventEmitter {
  constructor() {
    this.events = {}
  }

  subscribe(eventName, callback) {
    this.events[eventName] = callback
  }

  emit(eventName, value) {
    if(!this.events[eventName]) return
    this.events[eventName](value)
  }
}

export const EVENTS = {
  O2_CREATED: "O2_CREATED",
  O2_CONSUMED: "O2_CONSUMED"
}

export const eventEmitter = new EventEmitter();