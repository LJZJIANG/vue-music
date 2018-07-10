import storage from 'good-storage'

const SEARCH_KEY = '__search__';
const PLAY_HISTORY_KEY = '__playhisrory__'
const SEARCH_MAX_LENGTH = 15; //最多缓存的搜索记录数
const PLAY_HISTORY_MAX_LENTH = 200;

/**
 * 
 * @param {缓存数组} arr 
 * @param {新增数据} val 
 * @param {比较函数} compare 
 * @param {缓存的最大数量} maxlen 
 */
function insertArray(arr, val, compare, maxlen) {
  let index = arr.findIndex(compare);
  if (index === 0) {
    // 是缓存中第一个，则直接返回
    return
  }
  if (index > 0) {
    arr.splice(index, 1); // 先删除
  }
  arr.unshift(val); // 添加到数组头部
  if (maxlen && maxlen < arr.length) {
    arr.pop(); // 将数组最后一个删除
  }
}

export function saveSearch(query) {
  let searchs = storage.get(SEARCH_KEY, []);
  // 添加缓存
  insertArray(searchs, query, (item) => {
    return item === query
  }, SEARCH_MAX_LENGTH)
  storage.set(SEARCH_KEY, searchs); // 存入浏览器缓存
  return searchs
}


export function loadSearch() {
  return storage.get(SEARCH_KEY, []);
}


export function removeOneSearch(query) {
  let searchs = storage.get(SEARCH_KEY, []);
  const index = searchs.findIndex((item) => {
    return item === query
  });
  
  if (index > -1) {
    searchs.splice(index, 1)
  }
  storage.set(SEARCH_KEY, searchs)
  return searchs;
}

export function removeAllSearch() {
  storage.remove(SEARCH_KEY); //清除缓存
  return []
}

export function savePlayHistory(history) {
  let histories = storage.get(PLAY_HISTORY_KEY, []);
  insertArray(histories, history, (item) => {
    return history.id === item.id
  }, PLAY_HISTORY_MAX_LENTH)
  storage.set(PLAY_HISTORY_KEY, histories)

  return histories
}

export function loadPlayHistory() {
  return storage.get(PLAY_HISTORY_KEY, []);
}