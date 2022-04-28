export const random = (max, min = 0) => {
  return Math.random() * (max - min) + min;
}

export const times = (times, callback) => {
  for(let i = 0; i < times; i++){
    callback(i)
  }
}

export class Debugging {
  static render(data) {
    const debug = document.querySelector('#debugging')
    debug.innerHTML = JSON.stringify(data, null, 2)
  }
}