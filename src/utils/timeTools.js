/**
 * @description:               传入时间戳，转换指定的时间格式
 * @param {Number} val      时间戳
 * @param {String} dateType 要得到的时间格式 例如 YYYY-MM-DD hh:mm:ss
 * @return dataStr 例如 YYYY-MM-DD hh:mm:ss
 * @author:    yk  2019/5/27
 */
function switchTime(val = +new Date(), dateType = 'YYYY-MM-DD hh:mm:ss') {
  // 将字符串转换成数字
  const timeStamp = +new Date(val)

  // 如果转换成数字出错
  if (!timeStamp) {
    return val
  }
  let str
  // 得到时间字符串
  const dateStr = new Date(timeStamp)
  str = dateType.replace('YYYY', dateStr.getFullYear())
  str = str.replace('MM', (dateStr.getMonth() + 1 < 10 ? '0' : '') + (dateStr.getMonth() + 1))
  str = str.replace('DD', (dateStr.getDate() < 10 ? '0' : '') + dateStr.getDate())
  str = str.replace('hh', (dateStr.getHours() < 10 ? '0' : '') + dateStr.getHours())
  str = str.replace('mm', (dateStr.getMinutes() < 10 ? '0' : '') + dateStr.getMinutes())
  str = str.replace('ss', (dateStr.getSeconds() < 10 ? '0' : '') + dateStr.getSeconds())
  return str
}

/**
 * @description:  时间显示转换
 * timeView(new Date()) // 刚刚发布
 * timeView('2019-05-19 23:01:00') - 59分钟前
 * timeView('2019-05-19 12:00:00') - 12小时前
 * timeView('2019-05-15 12:00:00') - 5天前
 * timeView('2019-04-15 12:00:00') - 04-15
 * timeView('2018-04-15 12:00:00') - 2018-04-15
 * @author:    yk  2019/5/27
 */
function timeView(val) {
  const now = +new Date() // 当时时间
  const timeStamp = +new Date(val) // 需要处理的时间
  const result = now - timeStamp // 相差的时间戳
  const min = 60 * 1000 // 分钟的毫秒数
  const hour = 60 * 60 * 1000 // 小时的毫秒数
  const day = 60 * 60 * 1000 * 24 // 日的毫秒数
  if (result / min < 1) {
    return '刚刚发布'
  } else if (result / min < 60) {
    return Math.floor(result / min) + '分钟前'
  } else if (result / hour > 1 && result / hour < 24) {
    return Math.floor(result / hour) + '小时前'
  } else if (result / day > 1 && result / day < 7) {
    return Math.floor(result / day) + '天前'
  } else if (switchTime(now, 'YYYY') === switchTime(timeStamp, 'YYYY')) {
    return switchTime(timeStamp, 'MM月DD日')
  } else {
    return switchTime(timeStamp, 'YYYY年MM月DD日')
  }
}

/**
 * @Describe: 秒转天时分秒
 * @author:   yk  2019/4/18
 */

function s_to_dhms(s) {
  //计算分钟
  //算法：将秒数除以60，然后下舍入，既得到分钟数
  let m;
  let h;
  let d;
  // m = Math.floor(s / 60);
  d = Math.floor(s / (60 * 60 * 24));
  h = Math.floor(s % (60 * 60 * 24) / (60 * 60));
  m = Math.floor((s % (60 * 60)) / 60);
  s = s % 60;
  if (d > 0) {
    d += '';
    h += '';
    m += '';
    s += '';
    h = (h.length === 1) ? '0' + h : h;
    m = (m.length === 1) ? '0' + m : m;
    s = (s.length === 1) ? '0' + s : s;
    return `${d}天${h}时${m}分${s}秒`
  } else if (h > 0) {
    h += '';
    m += '';
    s += '';
    h = (h.length === 1) ? '0' + h : h;
    m = (m.length === 1) ? '0' + m : m;
    s = (s.length === 1) ? '0' + s : s;
    return `${h}时${m}分${s}秒`
  } else if (m > 0) {
    m += '';
    s += '';
    //如果只有一位数，前面增加一个0
    m = (m.length === 1) ? '0' + m : m;
    s = (s.length === 1) ? '0' + s : s;
    return `${m}分${s}秒`;
  } else {
    s += '';
    s = (s.length === 1) ? '0' + s : s;
    return `${s}秒`;
  }
}


export {
  switchTime,
  timeView,
  s_to_dhms
}