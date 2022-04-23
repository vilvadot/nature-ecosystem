import {initializeCanvas} from './Canvas.js'

const svg = initializeCanvas()

class Debugging {
  static render(data){
    const debug = document.querySelector('#debugging')
    debug.innerHTML = JSON.stringify(data, null, 2)
  }
}

function mainLoop() {
  Debugging.render({hello :true})
  requestAnimationFrame(mainLoop);
}

mainLoop()