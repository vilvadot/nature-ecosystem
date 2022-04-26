import { svgContext } from '../svgContext.js'

export class Graphic {
  constructor(child) {
    const group = svgContext.group()
    group.add(child)
    this.group = group
    this.child = child
  }

  center(...args) {
    this.group.center(...args)
  }

  flip(...args) {
    this.child.flip(...args)
  }
}