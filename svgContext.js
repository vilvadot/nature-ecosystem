import { WIDTH , HEIGHT } from './config.js'
import { SVG } from "https://cdn.skypack.dev/@svgdotjs/svg.js";

export const initializeCanvas = () => {
const svg = SVG()
  .addTo("#sketch")
  .size(WIDTH, HEIGHT)
  .viewbox(0, 0, WIDTH, HEIGHT)
return svg
}

export const svgContext = initializeCanvas()
