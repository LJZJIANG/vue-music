/**返回随机整数
 * 
 * @param {最小数} min 
 * @param {最大数} max 
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 返回打乱顺序的播放列表
 * @param {传入数组} arr 
 */
export function shuffle(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}
