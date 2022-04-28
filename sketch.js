import { Alga, Fish, FollowerFish } from './organisms/index.js'
import { Water } from './Water.js'
import { times, Debugging } from './utils.js'
import { CENSUS } from './config.js'
import {MouseTracker} from './MouseTracker.js'

const water = new Water()
const mouse = new MouseTracker()

const creatures = []

times(CENSUS.algae, () => creatures.push(new Alga()))
times(CENSUS.fish, () => creatures.push(new Fish()))
creatures.push(new FollowerFish(mouse))

function mainLoop() {
  Debugging.render({ O2: water.oxygen.getLevel() })
  creatures.forEach(creature => creature.update())
  requestAnimationFrame(mainLoop);
}

mainLoop()