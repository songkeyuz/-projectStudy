//ajax请求函数模块
//返回值：promise对象（异步返回的数据是:response.data）

import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
    //包裹一层promise 方便后面调用
    return new Promise(function (resolve, reject) {
        //执行异步ajax请求
        let promise
        if (type === 'GET') {
            //发送GET请求    拼接字符串
            //定义最终目标
            let paramStr = ''
            //获取每个值 循环遍历拼接
            Object.keys(data).forEach(key => {
                paramStr += key + '=' + data[key] + '&'
            })
            //data[key]是获取数据的value值
            //判断是否拼接了  要去除最后多的一个 &
            if (paramStr !== '') {
                paramStr = paramStr.substring(0, paramStr.length - 1)
                url = url + '?' + paramStr
            }
            //使用axios发get请求
            promise = axios.get(url)
        } else {
            //使用axios发post请求
            promise = axios.post(url, data)
        }

        promise.then(function (response) {
            //成功了调用resolve()
            resolve(response.data)
        }).catch(function (error) {
            //失败了调用reject()
            reject(error)
        })
    })
}