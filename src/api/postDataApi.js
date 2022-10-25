import request from '@/utils/request.js'
export function getDataApi(info) {
    return request({
        datas: {
            url: '/m1/1750685-0-default/user/login',
            method: 'post',
            data: info
        }
    })
}