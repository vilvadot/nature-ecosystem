import { WIDTH as W, HEIGHT as H, COLORS } from './config.js'
import { SVG } from "https://cdn.skypack.dev/@svgdotjs/svg.js";

export const initializeCanvas = () => {
const svg = SVG()
  .addTo("#sketch")
  .size(W, H)
  .viewbox(0, 0, W, H)

svg.node.style.background = COLORS.BACKGROUND
document.querySelector('body').style.background = COLORS.BACKGROUND

return svg
}

export const WIDTH = W;
export const HEIGHT = H;
export const svgContext = initializeCanvas()
