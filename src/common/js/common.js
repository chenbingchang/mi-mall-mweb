/**
 * 防抖
 * @param {Function} fn 实际要执行的函数
 * @param {number} delay 延迟时间，单位毫秒，默认200
 * @return {Function} 返回防抖函数
 */
function debounced (fn, delay = 200) {
  // 定时器
  let timer

  return function () {
    // 保存函数调用时的上下文和参数，传递给fn
    const context = this
    const args = arguments
    // 如果定时器已存在则先清除，保证不执行fn
    clearTimeout(timer)
    // 当返回的函数被最后一次调用，即过了delay毫秒后执行fn
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

/**
 * 节流
 * @param {Function} fn 实际要执行对函数
 * @param {number} threshhold 执行间隔，单位毫秒，默认250
 * @return {Function} 返回一个“节流”函数
 */
function throttle (fn, threshhold = 250) {
  // 记录上次执行对时间
  let last
  // 定时器
  let timer

  // 返回的函数，每过 threshhold 毫秒就执行一次 fn 函数
  return function () {
    // 保存函数调用时的上下文和参数，传递给fn
    const context = this
    const args = arguments
    const now = +new Date()
    // 如果距离上次执行的时间小于threshhold那么就放弃执行fn，并重新计时
    if (last && now < last + threshhold) {
      clearTimeout(timer)
      // 保证在当前时间区间结束后，再执行一次fn
      timer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, threshhold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}

/**
 * 获取当前日期时间，格式：yyyy-MM-dd HH:mm:ss
 * @param {number} tiems 时间戳，可选
 * @param {string} timeType 时间的格式。H，小时; I,小时：分钟; S，小时:分钟:秒; 默认S
 */
function curDateTime (tiems, timeType = 'S') {
  const d = tiems ? new Date(tiems) : new Date()
  const year = d.getFullYear()
  let month = d.getMonth() + 1
  let date = d.getDate()
  let hours = d.getHours()
  let minutes = d.getMinutes()
  let seconds = d.getSeconds()

  if (month < 10) {
    month = '0' + month
  }
  if (date < 10) {
    date = '0' + date
  }
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  let timeTxt = ''
  switch (timeType.toLocaleUpperCase()) {
    case 'H':
      timeTxt = `${hours}`
      break
    case 'I':
      timeTxt = `${hours}:${minutes}`
      break
    case 'S':
      timeTxt = `${hours}:${minutes}:${seconds}`
      break
    default:
      timeTxt = `${hours}:${minutes}:${seconds}`
  }

  const result = `${year}-${month}-${date} ${timeTxt}`
  return result
}

/**
 * 获取当前时间、当前时间戳、和今天0时的时间戳
 * @returns {Object} 当前的时间信息。todayZeroTimeStamp,// 今天0时的时间戳；curDateTimeStr,// 现在的时间，yyyy-MM-dd HH:mm:ss；curTimeStamp// 现在的时间戳
 */
function curTimeObj () {
  const time = new Date()
  const curTimeStamp = time.getTime()
  const todayZeroTimeStamp =
    curTimeStamp -
    ((time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds()) *
      1000 +
      time.getMilliseconds())
  const curDateTimeStr = curDateTime(curTimeStamp)

  return {
    todayZeroTimeStamp, // 今天0时的时间戳
    curDateTimeStr, // 现在的时间，yyyy-MM-dd HH:mm:ss
    curTimeStamp, // 现在的时间戳
  }
}

/**
 * 计算选择时间的范围，供el-data-picker动态设置时间范围使用
 * @param {string} curDateTimeStr 当前的日期时间字符串，格式：yyyy-MM-dd HH:mm:ss
 * @param {string} selDateTimeStr 选择的日期时间字符串，格式：yyyy-MM-dd HH:mm:ss
 * @param {Boolean} isAfter 可选的时间是当前时间之前还是之后。true: 之后（默认）；false: 之前；
 * @returns {Object} selectableRange // 时间范围;isValid: true,// 选择的时间是否合法
 */
function computedTimeRange (curDateTimeStr, selDateTimeStr, isAfter = true) {
  const result = {
    selectableRange: '00:00:00 - 23:59:59', // 时间范围
    isValid: true, // 选择的时间是否合法
  }

  if (curDateTimeStr && selDateTimeStr) {
    const curDateTimeArr = curDateTimeStr.split(' ')
    const selDataTimeArr = selDateTimeStr.split(' ')

    // 同一天，
    if (curDateTimeArr[0] === selDataTimeArr[0]) {
      const curTimeArr = curDateTimeArr[1].split(':').map(item => parseInt(item))
      const selTimeArr = selDataTimeArr[1].split(':').map(item => parseInt(item))

      if (isAfter) {
        // 之后，则只能选择当前时间之后的时间
        result.selectableRange = `${curDateTimeArr[1]} - 23:59:59` // 设置时间范围

        // 判断当前时间是否在范围内
        if (
          selTimeArr[0] < curTimeArr[0] ||
          (selTimeArr[0] === curTimeArr[0] && selTimeArr[1] < curTimeArr[1]) ||
          (selTimeArr[0] === curTimeArr[0] &&
            selTimeArr[1] === curTimeArr[1] &&
            selTimeArr[2] < curTimeArr[2])
        ) {
          // 选择时间无效
          result.isValid = false
        }
      } else {
        // 之前，则只能选择当前时间之前的时间
        result.selectableRange = `00:00:00 - ${curDateTimeArr[1]}` // 设置时间范围

        // 判断当前时间是否在范围内
        if (
          selTimeArr[0] > curTimeArr[0] ||
          (selTimeArr[0] === curTimeArr[0] && selTimeArr[1] > curTimeArr[1]) ||
          (selTimeArr[0] === curTimeArr[0] &&
            selTimeArr[1] === curTimeArr[1] &&
            selTimeArr[2] > curTimeArr[2])
        ) {
          // 选择时间无效
          result.isValid = false
        }
      }
    }
  }

  return result
}

/**
 * 解析日期时间字符串，别传只有日期的字符串，我不能处理
 * @param {string} str 要解析的日期时间字符串，日期和
 * @param {string} dateSeparator 日期的分隔符，默认'-'
 * @param {string} timeSeparator 时间的分隔符，默认':'
 * @param {string} dateTimeSeparator 日期和时间之间的连接符，默认' '
 * @param {Boolean} isDate 是返回Date对象还是返回时间戳。true: Date对象；false: 时间戳；
 * @returns {Object | number} Date对象或者时间戳，根据isDate参数决定
 */
function parseDateTimeStr (
  str,
  dateSeparator = '-',
  timeSeparator = ':',
  dateTimeSeparator = ' ',
  isDate = false,
) {
  const dateTimeArr = str.split(dateTimeSeparator)
  const dateArr = dateTimeArr[0].split(dateSeparator).map(item => parseInt(item))
  const timeArr = dateTimeArr[1].split(timeSeparator).map(item => parseInt(item))
  // new Date()的参数
  const param = []

  // 日期
  for (let i = 0; i < dateArr.length; i++) {
    if (i === 1) {
      // 月份要-1
      param.push(dateArr[i] - 1)
    } else {
      param.push(dateArr[i])
    }
  }
  // 时间
  for (const j in timeArr) {
    param.push(timeArr[j])
  }
  // 加上毫秒
  param.push(0)

  if (isDate) {
    return new Date(...param)
  } else {
    return new Date(...param).getTime()
  }
}

/**
 * 判断删除的数据是否是最后一页最后一条数据，是则查询页码要-1
 * @param {number} total 总数
 * @param {number} pageSize 每页数
 * @param {number} pageIndex 当前页码
 * @returns {Boolean} true: 是；false： 不是;
 */
function isLastPageLastData (total, pageSize, pageIndex) {
  // 当前页码是1，则不用判断
  if (pageIndex === 1) {
    return false
  }

  // 最后一页
  if (Math.ceil(total / pageSize) === pageIndex) {
    // 最后一条
    if (total % pageSize === 1) {
      return true
    }
  }

  return false
}

/**
 * 转义'<'、'>'防止XSS攻击
 * @param {string} srt 需要转义的字符串
 * @returns {string} 转义后的字符串
 */
function htmlEncode (str) {
  if (!str) {
    return ''
  }
  return str
    .toString()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export { debounced, throttle, curDateTime, isLastPageLastData, htmlEncode, curTimeObj, computedTimeRange, parseDateTimeStr }
