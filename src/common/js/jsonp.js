import originJSONP from 'jsonp'

/**
 * 封装 jsonp 方法
 * @param url 路径
 * @param data 传递的参数
 * @param option
 * @returns {Promise}
 */
export default function jsonp(url, data, option) {
  // 判断url中有没有问号，有就加&
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

/**
 *  拼接 url
 * @param data
 */
function param(data) {
  let url = ''
  for (let key in data) {
    let value = data[key] !== undefined ? data[key] : ''
    url += `&${key}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : '' //如果url存在，则截取第一个字符(?)之后的子串
}
