import { Vector } from "./Vector.js";

export class MouseTracker {
  constructor() {
    this.position = Vector.ZERO
    this._listenForMousePosition()
  }

  getPosition(){
    return this.position
  }

  _listenForMousePosition() {
    window.addEventListener('mousemove', ({ clientX, clientY }) => {
      this.position = new Vector(clientX, clientY)
    })
  }
}