import { Alga, Fish } from './organisms/index.js'
import { Water } from './Environment.js'
import { times, Debugging } from './utils.js'

const creatures = []

times(10, () => creatures.push(new Alga()))
times(30, () => creatures.push(new Fish()))

const water = new Water()

function mainLoop() {
  Debugging.render({ O2: water.oxygen.getLevel() })
  creatures.forEach(creature => creature.update())
  requestAnimationFrame(mainLoop);
}

mainLoop()