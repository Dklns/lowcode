import request from '@/utils/request.js'
export function getDataApi(info) {
    // 如果跨域才会用这个方法，这里大概率是用不上的
    return request({
        datas: {
            url: '/m1/1750685-0-default/user/login',
            method: 'post',
            data: info
        }
    })
}