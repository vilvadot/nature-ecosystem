import { WIDTH, HEIGHT, COLORS } from './config.js'
import { SVG } from "https://cdn.skypack.dev/@svgdotjs/svg.js";

export const initializeCanvas = () => {
const svg = SVG()
  .addTo("#sketch")
  .size(WIDTH, HEIGHT)
  .viewbox(0, 0, WIDTH, HEIGHT)

svg.node.style.background = COLORS.BACKGROUND
document.querySelector('body').style.background = COLORS.BACKGROUND

return svg
}