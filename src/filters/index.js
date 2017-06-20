/**
 * Created by admin on 17/6/20.
 */
const filters = {
  fmtDate: function (date, fmt) {
    if (/(y+)/.test(fmt)) {
      // RegExp.$1 匹配到的对象
      // date.getFullYear() + '' 转换为字符串
      // .substr(4 - RegExp.$1.length)取长度,如2016,如果length为2则结果取16,如果length为4则结果取2016
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        // 例: RegExp.$1 为9, 则其length = 1,那么应该在其前面补0
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
  }
};
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

export default (Vue) => {
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);// 自定义过滤器
  });
};
