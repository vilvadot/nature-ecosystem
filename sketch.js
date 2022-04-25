import { Alga, Fish } from './organisms/index.js'
import { Water } from './Water.js'
import { times, Debugging } from './utils.js'

const water = new Water()
const creatures = []

times(10, () => creatures.push(new Alga()))
times(1, () => creatures.push(new Fish()))

function mainLoop() {
  Debugging.render({ O2: water.oxygen.getLevel() })
  creatures.forEach(creature => creature.update())
  requestAnimationFrame(mainLoop);
}

mainLoop()