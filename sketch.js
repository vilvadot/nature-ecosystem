import { Alga, Fish } from './organisms/index.js'
import { Water } from './Water.js'
import { times, Debugging } from './utils.js'
import { CENSUS } from './config.js'

const water = new Water()
const creatures = []

times(CENSUS.algae, () => creatures.push(new Alga()))
times(CENSUS.fish, () => creatures.push(new Fish()))

function mainLoop() {
  Debugging.render({ O2: water.oxygen.getLevel() })
  creatures.forEach(creature => creature.update())
  requestAnimationFrame(mainLoop);
}

mainLoop()