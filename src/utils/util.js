import moment from 'moment'
import 'moment/locale/zh-cn'

const diffForHumans = (date, format = 'YYYYMMDD H:mm:ss') => {
  moment.locale('zh-cn')
  return moment(date, format).fromNow()
}

/**
 * 获取当前页 url
 */
const getCurrentPageUrl = () => {
    var pages = getCurrentPages()    //获取加载的页面
    var currentPage = pages[pages.length-1]    //获取当前页面的对象
    return currentPage.route    //当前页面url
}

/**
 * 获取当前页带参数的 url
 */
const getCurrentPageUrlWithArgs = () => {
    var pages = getCurrentPages()    //获取加载的页面
    var currentPage = pages[pages.length-1]    //获取当前页面的对象
    var url = currentPage.route    //当前页面url
    var options = currentPage.options    //如果要获取url中所带的参数可以查看options

    //拼接url的参数
    var urlWithArgs = url + '?'
    for(var key in options){
        var value = options[key]
        urlWithArgs += key + '=' + value + '&'
    }
    return urlWithArgs.substring(0, urlWithArgs.length-1)
}

export default {
  diffForHumans,
  getCurrentPageUrl,
  getCurrentPageUrlWithArgs
}
